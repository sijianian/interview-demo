export function myBind(context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('error')
  }

  context = context || window

  const _this = this

  return function F(...args2) {
    if (this instanceof F) {
      return new _this(...args, ...args2)
    }

    return _this.apply(context, [...args, ...args2])
  }
}
