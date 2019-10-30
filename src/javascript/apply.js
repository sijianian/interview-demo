export function myApply(context, ...args) {
  if (typeof this !== 'function') {
    throw new Error('error')
  }

  context = context || window

  const mySymbol = Symbol()

  context[mySymbol] = this

  const params = args[0]
  const result = params ? context[mySymbol](...params) : context[mySymbol]()

  delete context[mySymbol]

  return result
}
