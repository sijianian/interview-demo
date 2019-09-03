export const throttle = (fn, delay = 300) => {
  let flag = true

  return (...args) => {
    if (!flag) {
      return
    }

    flag = false

    setTimeout(() => {
      fn.apply(this, args)
      flag = true
    }, delay)
  }
}
