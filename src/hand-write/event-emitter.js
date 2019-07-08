export default class EventEmitter {
  constructor() {
    this._events = Object.create(null)
  }

  on(type, handler) {
    this._events[type] = this._events[type] || []
    this._events[type].push(handler)
  }

  off(type, handler) {
    if (this._events[type]) {
      const index = this._events[type].indexOf(handler)
      if (~index) {
        this._events[type].splice(index, 1)
      }
    }
  }

  once(type, handler) {
    let fired = false
    function magic() {
      this.off(type, magic)
      if (!fired) {
        fired = true
        handler.apply(this, arguments)
      }
    }
    this.on(type, magic)
  }

  emit(type) {
    let payload = [].slice.call(arguments, 1)
    let array = this._events[type] || []
    array.forEach(handler => {
      handler.apply(this, payload)
    })
  }
}
