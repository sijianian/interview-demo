export function Fibonacci(n) {
  let f = 0
  let g = 1

  while (n--) {
    g = g + f
    f = g - f
  }

  return f
}

export function fibonacci2(n) {
  return n < 2 ? n : fibonacci2(n - 2) + fibonacci2(n - 1)
}

export function fibonacci3(n) {
  let f1 = 0
  let f2 = 1
  let r

  while (n--) {
    r = f1 + f2
    f2 = f1
    f1 = r
  }

  return r
}
