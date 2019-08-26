/**
 * 题目: 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
 * 并返回它的位置, 如果没有则返回-1（需要区分大小写）。
 */

const firstNotRepeatingChar = str => {
  if (!str) {
    return -1
  }

  const countMap = {}
  const arr = str.split('')

  arr.forEach(
    item => (countMap[item] = countMap[item] ? countMap[item] + 1 : 1)
  )

  arr.forEach((item, index) => {
    if (countMap[item] === 1) {
      return index
    }
  })

  return -1
}

const firstNotRepeatingChar2 = str => {
  const arr = str.split('')

  arr.forEach((item, index) => {
    if (arr.indexOf(item) === arr.lastIndexOf(item)) {
      return index
    }
  })

  return -1
}
