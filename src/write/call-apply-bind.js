/* eslint-disable no-extend-native */

// call
Function.prototype.myCall = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('error')
  }

  context = window || context

  const mySymbol = Symbol()
  const args = [...arguments].slice(1)

  context[mySymbol] = this

  const result = context[mySymbol](...args)

  delete context[mySymbol]

  return result
}

// apply
Function.prototype.myApply = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('error')
  }

  context = window || context

  const mySymbol = Symbol()
  const args = [...arguments].slice(1)

  context[mySymbol] = this

  let result

  if (args[0]) {
    result = context[mySymbol](args)
  } else {
    result = context[mySymbol]()
  }

  delete context[mySymbol]

  return result
}

// bind
Function.prototype.myBind = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('error')
  }

  context = window || context

  const _this = this
  const args = [...arguments].slice(1)

  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }

    return _this.apply(context, args.concat(...arguments))
  }
}
