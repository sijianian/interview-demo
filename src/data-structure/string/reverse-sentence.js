/*
题目: 翻转单词顺序
*/

const reverseSentence = (str = '') =>
  str
    .split(' ')
    .reverse()
    .join()

/*
题目：
左旋转字符串
 */

const leftRotateString = (str, n) => {
  return (str + str).substr(n)
}
