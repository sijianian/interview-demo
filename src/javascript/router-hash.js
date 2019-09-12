/**
 * https://mubu.com/doc/1iFLzJZrdK
 *
 * @class HashRouter
 */
export class HashRouter {
  constructor() {
    // 用于存储不同 hash 值对应的回调函数
    this.router = {}

    window.addEventListener('hashchange', this.load.bind(this), false)
  }

  // 用于注册每个视图
  register(hash, callback = () => {}) {
    this.router[hash] = callback
  }

  // 用于注册首页
  registerIndex(callback = () => {}) {
    this.router['index'] = callback
  }

  // 用于处理视图未找到的情况
  registerNotFound(callback = () => {}) {
    this.router['404'] = callback
  }

  registerError(callback = () => {}) {
    this.router['error'] = callback
  }

  load() {
    const hash = window.location.hash.slice(1)
    let handler = !hash ? this.router.index : this.router[hash]

    if (!hash) {
      handler = this.router.index
    } else if (!this.router.hasOwnProperty(hash)) {
      handler = this.router['404'] || (() => {})
    } else {
      handler = this.router[hash]
    }

    handler.call(this)
  }
}
