function Fibonacci(n) {
  const result = []

  if (n <= 0) {
    return 0
  } else if (n <= 2) {
    return 1
  } else {
    result[1] = 1
    result[2] = 2

    for (let i = 0; i <= n; i++) {
      result[i] = result[i - 1] + result[i - 2]
    }

    return result[n - 1]
  }
}
