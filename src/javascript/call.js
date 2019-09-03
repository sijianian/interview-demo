export function myCall(context) {
  if (typeof this !== 'function') {
    throw new Error('error')
  }

  context = context || window

  const mySymbol = Symbol()
  const args = [...arguments].slice(1)

  context[mySymbol] = this

  const result = context[mySymbol](...args)

  delete context[mySymbol]

  return result
}
