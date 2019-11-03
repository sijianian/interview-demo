/**
 * 输入一个字符串,按字典序打印出该字符串中字符的所有排列。
 * 例如输入字符串 abc,则打印出由字符 a,b,c 所能排列出来的所有字符串 abc,acb,bac,bca,cab和cba。
 */

const permutationCore = (queue, result, temp = '', current = '') => {
  current += temp

  if (queue.length === 0) {
    result.push(current)
    return
  }

  for (let i = 0; i < queue.length; i++) {
    temp = queue.shift()
    permutationCore(queue, result, temp, current)
    queue.push(temp)
  }
}

export const permutation = str => {
  const result = []

  if (str) {
    queue = str.split('')
    permutationCore(queue, result)
  }

  result.sort()
  return [...new Set(result)]
}
