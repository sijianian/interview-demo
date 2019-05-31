const PENDING = 'pending'
const RESOLVE = 'resolve'
const REJECT = 'reject'

class MyPromise {
  constructor() {
    this.status = PENDING
    this.value = null
    this.resolveCallbacks = []
    this.rejectCallbacks = []
  }

  resolve(val) {
    if (this.status === PENDING) {
      this.status = RESOLVE
      this.value = val
      this.rejectCallbacks.forEach(cb => cb(this.value))
    }
  }

  reject(val) {
    if (this.status === PENDING) {
      this.status = REJECT
      this.value = val
      this.rejectCallbacks.forEach(cb => cb(this.value))
    }
  }
}

function fn() {}

MyPromise.prototype.then = function(onFufilled, onRejected) {
  const that = this

  onFufilled = typeof onFufilled === 'function' ? onFufilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => {
    throw r
  }

  if (that.state === PENDING) {
    that.resolveCallbacks.push(onFufilled)
    that.rejectCallbacks.push(onRejected)
  }

  if (that.state === RESOLVE) {
    onFufilled(that.value)
  }

  if (that.state === REJECT) {
    onRejected(this.value)
  }
}
