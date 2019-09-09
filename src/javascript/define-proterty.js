let uid = 0

// 消息管理员
export class Dep {
  constructor() {
    this.id = uid++
    this.subs = []
  }

  depend() {
    Dep.target.addDep(this)
  }

  addSub(sub) {
    this.subs.push(sub)
  }

  notify() {
    this.subs.forEach(sub => sub.update())
  }
}

Dep.target = null

// 监听者（Observe）
export class Observe {
  constructor(value) {
    this.value = value
    this.walk(value)
  }

  walk(value) {
    Object.keys(value).forEach(key => this.convert(key, value[key]))
  }

  convert(key, val) {
    defineReactive(this.value, key, val)
  }
}

//订阅者
class Watcher {
  constructor(vm, expOrFn, cb) {
    this.depIds = {} // hash储存订阅者的id,避免重复的订阅者
    this.vm = vm // 被订阅的数据一定来自于当前Vue实例
    this.cb = cb // 当数据更新时想要做的事情
    this.expOrFn = expOrFn // 被订阅的数据
    this.val = this.get() // 维护更新之前的数据
  }
  // 对外暴露的接口，用于在订阅的数据被更新时，由订阅者管理员(Dep)调用
  update() {
    this.run()
  }
  addDep(dep) {
    // 如果在depIds的hash中没有当前的id,可以判断是新Watcher,因此可以添加到dep的数组中储存
    // 此判断是避免同id的Watcher被多次储存
    if (!this.depIds.hasOwnProperty(dep.id)) {
      dep.addSub(this)
      this.depIds[dep.id] = dep
    }
  }
  run() {
    const val = this.get()
    console.log(val)
    if (val !== this.val) {
      this.val = val
      this.cb.call(this.vm, val)
    }
  }
  get() {
    // 当前订阅者(Watcher)读取被订阅数据的最新更新后的值时，通知订阅者管理员收集当前订阅者
    Dep.target = this
    const val = this.vm._data[this.expOrFn]
    // 置空，用于下一个Watcher使用
    Dep.target = null
    return val
  }
}

class Vue {
  constructor(options = {}) {
    // 简化了$options的处理
    this.$options = options
    // 简化了对data的处理
    let data = (this._data = this.$options.data)
    // 将所有data最外层属性代理到Vue实例上
    Object.keys(data).forEach(key => this._proxy(key))
    // 监听数据
    observe(data)
  }
  // 对外暴露调用订阅者的接口，内部主要在指令中使用订阅者
  $watch(expOrFn, cb) {
    new Watcher(this, expOrFn, cb)
  }
  _proxy(key) {
    Object.defineProperty(this, key, {
      configurable: true,
      enumerable: true,
      get: () => this._data[key],
      set: val => {
        this._data[key] = val
      },
    })
  }
}

export function defineReactive(obj, key, val) {
  const dep = new Dep()

  let childOb = observe(val)

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: () => {
      if (Dep.target) {
        dep.depend()
      }
      return val
    },
    set: newVal => {
      if (val === newVal) {
        return
      }

      val = newVal
      childOb = observe(newVal)
      dep.notify()
    },
  })
}

export function observe(value) {
  if (!value || typeof value !== 'object') {
    return
  }
  return new Observe(value)
}
