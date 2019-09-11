export function myCall(context, ...args) {
  if (typeof this !== 'function') {
    throw new Error('error')
  }

  context = context || window

  const mySymbol = Symbol()

  context[mySymbol] = this

  const result = context[mySymbol](...args)

  delete context[mySymbol]

  return result
}
