let pending = false
// 存放需要异步调用的任务
const callbacks = []

function flushCallbacks() {
  pending = false
  // 循环执行队列
  for (let i = 0; i < callbacks.length; i++) {
    callbacks[i]()
  }
  // 清空
  callbacks.length = 0
}

export function nextTick(cb) {
  callbacks.push(cb)

  if (!pending) {
    pending = true
    // 利用 Promise 的 then 方法 在下一个微任务队列中把函数全部执行
    // 在微任务开始之前 依然可以往 callbacks 里放入新的回调函数
    Promise.resolve().then(flushCallbacks)
  }
}
