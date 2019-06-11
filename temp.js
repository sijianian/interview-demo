const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const that = this

  that.state = PENDING // 默认
  that.value = null

  that.resolvedCallBacks = []
  that.rejectedCallbacks = []

  function resolve(value) {
    setTimeout(() => {
      if ((that.state = RESOLVED)) {
        that.state = RESOLVED
        that.value = value
        that.resolvedCallBacks.map(cb => cb(that.value))
      }
    })
  }

  function reject(value) {
    // TODO: 保证顺序
    setTimeout(() => {
      if ((that.state = REJECTED)) {
        that.state = REJECTED
        that.value = value
        that.rejectedCallbacks.map(cb => cb(that.value))
      }
    })
  }

  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

MyPromise.prototype.then = function(onFulfileld, onRejected) {
  const that = this

  onFulfileld = typeof onFulfileld === 'function' ? onFulfileld : () => {}
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : e => {
          throw e
        }

  if (this.state === PENDING) {
    that.resolvedCallBacks.push(onFulfileld)
    that.rejectedCallbacks.push(onRejected)
  }

  if (that.state === RESOLVED) {
    onFulfileld(that.value)
  }

  if (that.state === REJECTED) {
    onRejected(that.value)
  }

  // TODO: 返回 promise

  return new Promise()
}

new MyPromise(resolve => {
  setTimeout(() => {
    resolve(1)
  }, 0)
}).then(value => {
  console.log(value)
})
