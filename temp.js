class EventEmitter {
  constructor() {
    this._events = Object.create(null)
  }

  on(type, handler) {
    this._events[type] = this._events[type] || []
    this._events[type].push(handler)
  }

  once(type, handler) {
    let fired = false

    function magic() {
      this.off(type, magic)

      if (!fired) {
        handler.apply(this, arguments)
        fired = true
      }
    }

    this.on(type, magic)
  }

  off(type, handler) {
    if (this._events[type]) {
      const index = this._events[type].indexOf(handler)

      if (~index) {
        this._events[type].splice(index, 1)
      }
    }
  }

  emit(type) {
    const payload = [...arguments].slice(1)

    if (this._events[type]) {
      this._events[type].forEach(handler => {
        handler.apply(this, payload)
      })
    }
  }
}
