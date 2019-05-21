function myCall(context) {
  if (typeof this !== 'function') {
    throw new TypeError()
  }

  context = context || window

  const args = [...arguments].slice(1)

  context.fn = this

  const result = context.fn(...args)
  delete context.fn

  return result
}

function myApply(context) {
  if (typeof this !== 'function') {
    throw new TypeError()
  }

  context = context || window
  context.fn = this

  let result

  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }

  delete context.fn

  return result
}

function myBind(context) {
  if (typeof this !== 'function') {
    throw new TypeError()
  }

  context = context || window
  const _this = this
  const args = [...arguments].slice(1)

  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }

    return _this.apply(context, args.concat(...arguments))
  }
}

function create() {
  let obj = {}

  const con = [].shift.call(arguments)

  obj.__proto__ = con.prototype

  let result = con.apply(obj, arguments)

  return result instanceof Object ? result : obj
}

function myInstanceOf(left, right) {
  const tempPrototype = right.prototype

  left = left.__proto__

  while (true) {
    if (left === null) {
      return false
    }

    if (left === tempPrototype) {
      return true
    }

    left = left.__proto__
  }
}
