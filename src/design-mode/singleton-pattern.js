// class 实现
export class MySingle {
  static getInstance() {
    if (!MySingle.instance) {
      MySingle.instance = new MySingle()
    }

    return MySingle.instance
  }
}

// 闭包实现
MySingle.getInstance = (function () {
  let instance = null

  return function () {
    if (!instance) {
      instance = new MySingle()
    }
    return instance
  }
})()
