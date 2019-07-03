function Fibonacci(n) {
  let f = 0
  let g = 1

  while (n--) {
    g += f
    f = g - f
  }

  return f
}

function Fibonacci2(n) {
  let first = 0
  let second = 1
  let result

  while (n--) {
    result = first + second

  }

  return result
}
