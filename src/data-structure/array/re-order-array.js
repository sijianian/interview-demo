/*
题目:

输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分

*/
export const reOrderArray = array => {
  if (!Array.isArray(array)) {
    return array
  }

  let start = 0
  let end = array.length - 1

  while (start < end) {
    while (array[start] % 2 === 1) {
      start++
    }
    while (array[end] % 2 === 0) {
      end--
    }
    if (start < end) {
      ;[array[start], array[end]] = [array[end], array[start]]
    }
  }

  return array
}
