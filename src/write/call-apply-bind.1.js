/* eslint-disable no-extend-native */

// 参数
// this 指向
Function.prototype.myCall = function(context) {
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

Function.prototype.myApply = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError()
  }

  context = context || window
  context.fn = this

  const args = arguments[1] ? [...arguments[1]] : []
  let result = context.fn(args)
  delete context.fn

  return result
}

// 返回函数
Function.prototype.myBind = function(context) {
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

// new
function myNew() {
  let obj = {}
  let fn = [].shift.call(arguments)
  obj.__proto__ = fn.prototype
  let result = fn.apply(obj, arguments)

  return result instanceof Object ? result : obj
}

// 对象，函数
function myInstanceOf(left, right) {
  let tempPrototype = right.prototype

  left = left.__proto__

  while(true) {
    if (left === null) {
      return false
    }

    if (left === tempPrototype) {
      return true
    }

    left = left.__proto__
  }
}

// 组合寄生继承
function Parent(val) {
  this.val = val
}

Parent.prototype.getVal = function() {
  console.log(this.val)
}

function Child(val) {
  Parent.call(this, val)
}

// 新创建对象的原型对象
// 枚举属性
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child
