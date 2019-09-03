export function myApply(context) {
  if (typeof this !== 'function') {
    throw new Error('error')
  }

  context = context || window

  const args = [...arguments].slice(1)
  const mySymbol = Symbol()

  context[mySymbol] = this

  let result

  if (args[0]) {
    result = context[mySymbol](...args[0])
  } else {
    result = context[mySymbol]()
  }

  delete context[mySymbol]

  return result
}
