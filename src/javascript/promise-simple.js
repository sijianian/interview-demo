const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

export class MyPromise {
  constructor(fn) {
    this.value = null
    this.state = PENDING

    this.onFulfilledList = []
    this.onRejectedList = []

    const resolve = value => {
      setTimeout(() => {
        if (this.state === PENDING) {
          this.value = value
          this.state = FULFILLED
          this.onFulfilledList.map(cb => cb(this.value))
        }
      })
    }
    const reject = value => {
      setTimeout(() => {
        if (this.state === PENDING) {
          this.value = value
          this.state = REJECTED
          this.onRejectedList.map(cb => cb(this.value))
        }
      })
    }

    try {
      fn(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : r => {
            throw r
          }

    if (this.state === PENDING) {
      this.onFulfilledList.push(onFulfilled)
      this.onRejectedList.push(onRejected)
    }

    if (this.state === FULFILLED) {
      onFulfilled(this.value)
    }

    if (this.state === REJECTED) {
      onRejected(this.value)
    }
  }
}
