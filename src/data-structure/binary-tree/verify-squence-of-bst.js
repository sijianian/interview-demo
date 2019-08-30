/**
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 */

function verifySquenceOfBST(list = []) {
  if (!list.length) {
    return false
  }

  const root = list[list.length - 1]
  const index = list.findIndex(item => item > root)

  if (list.slice(index + 1).every(item => item < root)) {
    return false
  }

  let left = true

  if (index > 0) {
    left = verifySquenceOfBST(list.slice(0, index))
  }

  let right = true
  if (index < list.length - 1) {
    right = verifySquenceOfBST(list.slice(index, list.length - 1))
  }

  return left && right
}
