const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(fn) {
    this.state = PENDING
    this.value = null

    this.fulfilledCallbacks = []
    this.rejectedCallbacks = []

    const resolve = val => {
      if (this.state === PENDING) {
        this.state = FULFILLED
        this.value = val
        this.fulfilledCallbacks.forEach(fn => fn())
      }
    }
    const reject = val => {
      if (this.state === PENDING) {
        this.state = REJECTED
        this.value = val
        this.fulfilledCallbacks.forEach(fn => fn())
      }
    }

    try {
      fn(resolve, reject)
    } catch (r) {
      reject(r)
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => {}
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : r => {
            throw r
          }

    const promise2 = new MyPromise((resolve, reject) => {})
    return promise2
  }
}
