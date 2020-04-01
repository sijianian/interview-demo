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
          this.onFulfilledList.forEach(fn => fn(this.value))
        }
      })
    }
    const reject = value => {
      setTimeout(() => {
        if (this.state === PENDING) {
          this.value = value
          this.state = REJECTED
          this.onRejectedList.forEach(fn => fn(this.value))
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

new MyPromise(resolve => {
  setTimeout(() => {
    resolve('111')
  }, 3000)
}).then(value => {
  console.log('value', value)
})
