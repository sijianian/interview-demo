/* eslint-disable no-extend-native */
Function.prototype.call = function(context) {
  context = context || window

  const mySymbol = Symbol()
  const args = [...arguments].slice(1)

  context[mySymbol] = this

  const result = context[mySymbol](...args)

  delete context[mySymbol]

  return result
}

Function.prototype.apply = function(context) {
  context = context || window

  const mySymbol = new Symbol()
  const args = [...arguments].slice(1)

  context[mySymbol] = this

  let result

  if (args[0]) {
    result = context[mySymbol](args)
  } else {
    result = context[mySymbol]()
  }

  delete context[mySymbol]()

  return result
}

Function.prototype.bind = function(context) {
  const _this = this
  const args = [...arguments].slice(1)

  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.context(...arguments))
  }
}

function myNew() {
  let obj = {}
  let Con = [].shift.call(arguments)

  obj.__proto__ = Con.prototype

  let result = Con.apply(obj, arguments)
  return result instanceof Object ? result : obj
}

function myInstanceof(left, right) {
  let prototype = right.prototype

  left = left.__proto__

  while(true) {
    if (!left === null || !left === undefined) {
      return
    }

    if (prototype === left) {
      return true
    }

    left = left.__proto__
  }
}
