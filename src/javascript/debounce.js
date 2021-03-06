export const debounce = (fn, delay = 300) => {
  let timer = null

  return function (...args) {
    clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
