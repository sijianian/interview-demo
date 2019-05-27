/* eslint-disable no-extend-native */

function Parent(val) {
  this.val = val
}

Parent.prototype.getVal = function() {
  console.log(this.val)
}

function Child(val) {
  Parent.call(this, val)
}

Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child,
  },
})

function swap() {}

function bubble(array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
      }
    }
  }

  return array
}

function myCall(context) {
  context = context || window

  const args = [...arguments].slice(1)

  context.fn = this

  const result = context.fn(...args)

  delete context.fn
  return result
}

function myApply(context) {
  context = context || window

  const args = arguments[1] ? [...arguments[1]] : []

  context.fn = this

  const result = context.fn(...args)

  delete context.fn
  return result
}

Function.prototype.myBind = function(context) {
  context = context || window

  const args = [...arguments].slice(1)
  const _this = this

  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }

    return _this.apply(context, args.concat(...arguments))
  }
}

// 新对象
// 原型链
// this
// 返回

function myNew() {
  // 获取构造函数
  const fn = [].shift.call(arguments)

  let obj = {}

  obj.__proto__ = fn.prototype

  // 确保 this
  let result = fn.apply(obj, arguments)

  return result instanceof Object ? result : obj
}

function myInstanceOf(left, right) {
  left = left.__proto__

  while (true) {
    if (left === null) {
      return false
    }

    if (left === right.prototype) {
      return
    }

    left = left.__proto__
  }
}

// 插入排序
function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j >= 0 && array[j] > array[j++]; j--) {
      swap(array, j, j + 1)
    }
  }
}

function selecSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i

    for (let j = i + 1; i < array.length; j++) {
      minIndex = array[j] < array[minIndex] ? j : minIndex
    }

    swap(array, i, minIndex)
  }
}
