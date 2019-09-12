class HistoryRouter {
  constructor() {
    this.router = {}
    this.listenPopState()
    this.listenLink()
  }

  listenPopState() {
    window.addEventListener('popstate', e => {
      const state = e.state || {}
      const path = state.path || ''

      this.dealPathHandler(path)
    })
  }

  listenLink() {
    window.addEventListener('click', e => {
      const dom = e.target

      if (dom.tagName.toUpperCase() === 'A' && dom.getAttribute('href')) {
        e.preventDefault()
      }
    })
  }

  load() {
    const path = window.location.pathname
    this.dealPathHandler(path)
  }

  register(path, callback = () => {}) {
    this.router[path] = callback
  }

  registerIndex(callback = () => {}) {
    this.router['/'] = callback
  }

  registerNotFound(callback = () => {}) {
    this.router['404'] = callback
  }

  registerError(callback = () => {}) {
    this.router['error'] = callback
  }

  assign(path) {
    window.history.pushState({ path }, null, path)
    this.dealPathHandler(path)
  }

  replace(path) {
    window.history.replaceState({ path }, null, path)
    this.dealPathHandler(path)
  }

  // 通用处理 path 调用回调函数
  dealPathHandler(path) {
    let handler

    if (!this.router.hasOwnProperty(path)) {
      handler = this.router['404'] || (() => {})
    } else {
      handler = this.router[path]
    }

    try {
      handler.call(this)
    } catch (e) {
      console
        .error(e)(this.router['error'] || (() => {}))
        .call(this, e)
    }
  }
}
