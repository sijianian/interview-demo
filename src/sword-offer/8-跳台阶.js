export function jumpFloor(number) {
  let f = 1
  let g = 2

  while (--number) {
    g += f
    f = g - f
  }

  return f
}
