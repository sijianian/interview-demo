// https://zhuanlan.zhihu.com/p/21834559

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  static resolve(value) {
    return new Promise((resolve, reject) => {
      resolve(value)
    })
  }
  static reject(value) {
    return new MyPromise((resolve, reject) => {
      reject(value)
    })
  }
  static all(promiseArr) {
    return new MyPromise((resolve, reject) => {
      let result = []

      promiseArr.forEach((promise, index) => {
        promise.then(value => {
          result[index] = value

          if (result.length === promiseArr.length) {
            resolve(result)
          }
        }, reject)
      })
    })
  }
  static race(promiseArr) {
    return new MyPromise((resolve, reject) => {
      promiseArr.forEach(promise => {
        promise.then(
          value => {
            resolve(value)
          },
          err => reject(err)
        )
      })
    })
  }
  static deferred() {
    let dfd = {}

    dfd.promise = new MyPromise((resolve, reject) => {
      dfd.resolve = resolve
      dfd.reject = reject
    })

    return dfd
  }

  constructor(fn) {
    this.state = PENDING
    this.value = null

    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = value => {
      if (value instanceof MyPromise) {
        return value.then(resolve, reject)
      }

      setTimeout(() => {
        if (this.state === PENDING) {
          this.value = value
          this.state = FULFILLED
          this.onFulfilledCallbacks.forEach(fn => fn())
        }
      })
    }

    const reject = value => {
      setTimeout(() => {
        if (this.state === PENDING) {
          this.value = value
          this.state = REJECTED
          this.onRejectedCallbacks.forEach(fn => fn())
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
    const that = this

    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : r => {
            throw r
          }

    const promise2 = new MyPromise((resolve, reject) => {
      if (that.state === PENDING) {
        that.onFulfilledCallbacks.push(() => {
          try {
            const x = onFulfilled(that.value)
            that.resolvePromise(promise2, x, resolve, reject)
          } catch (r) {
            reject(r)
          }
        })
        that.onRejectedCallbacks.push(() => {
          try {
            const x = onRejected(that.value)
            that.resolvePromise(promise2, x, resolve, reject)
          } catch (r) {
            reject(r)
          }
        })
      }

      if (that.state === FULFILLED) {
        setTimeout(() => {
          try {
            const x = onFulfilled(that.value)
            that.resolvePromise(promise2, x, resolve, reject)
          } catch (r) {
            reject(r)
          }
        })
      }

      if (that.state === REJECTED) {
        setTimeout(() => {
          try {
            const x = onRejected(that.value)
            that.resolvePromise(promise2, x, resolve, reject)
          } catch (r) {
            reject(r)
          }
        })
      }
    })

    return promise2
  }

  resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
      return reject(new TypeError('Error'))
    }

    if (x instanceof MyPromise) {
      x.then(value => {
        this.resolvePromise(promise2, value, resolve, reject)
      })
    }

    let called = false

    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
      try {
        let then = x.then

        if (typeof then === 'function') {
          then.call(
            x,
            y => {
              if (called) {
                return
              }
              called = true
              this.resolvePromise(promise2, y, resolve, reject)
            },
            e => {
              if (called) {
                return
              }
              called = true
              reject(e)
            }
          )
        } else {
          resolve(x)
        }
      } catch (r) {
        if (called) {
          return
        }

        called = true
        reject(r)
      }
    } else {
      resolve(x)
    }
  }
}
