// 自带函数节流功能
// 基本保证在 16.6 毫秒内只执行一次
export function setInterval(callback, interval) {
  let timer

  const now = Date.now

  let startTime = now()
  let endTime = startTime

  const loop = () => {
    timer = window.requestAnimationFrame(loop)

    endTime = now()

    if (endTime - startTime >= interval) {
      startTime = endTime = now()
      callback(timer)
    }
  }

  timer = window.requestAnimationFrame(loop)

  return timer
}
