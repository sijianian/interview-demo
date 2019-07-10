function jumpFloorII(number) {
  let i = 1

  while (--number) {
    i *= 2
  }

  return i
}
