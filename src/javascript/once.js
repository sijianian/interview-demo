export function once(fn) {
  let called = false

  return function () {
    if (!called) {
      called = true
      // eslint-disable-next-line prefer-rest-params
      fn.apply(this, arguments)
    }
  }
}
