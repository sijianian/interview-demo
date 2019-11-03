/**
 * 二叉树中和为某一值的路径
 *
 * 描述：输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径
 */

const findPathCore = (node, expectNumber, stack, sum, result) => {
  stack.push(node.val)

  sum += node.val

  if (!node.left && !node.right && sum === expectNumber) {
    result.push(stack.slice(0))
  }

  if (node.left) {
    findPathCore(node.left, expectNumber, stack, sum, result)
  }

  if (node.right) {
    findPathCore(node.right, expectNumber, stack, sum, result)
  }

  stack.pop()
}

export const findPath = (root, expectNumber) => {
  const result = []

  if (root) {
    findPathCore(node, expectNumber, [], 0, result)
  }

  return result
}
