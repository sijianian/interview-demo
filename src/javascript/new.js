export function myNew(...args) {
  // 创建一个空对象
  const obj = {}

  // 获取构造函数
  const constructorFunc = [].shift.call(args)

  // 设置空对象的原型
  obj.__proto__ = constructorFunc.prototype

  // 绑定 this 并执行构造函数
  const result = constructorFunc.apply(obj, args)

  // 确保返回值为对象
  return result instanceof Object ? result : obj
}
