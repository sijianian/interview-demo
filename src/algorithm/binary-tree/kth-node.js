// 二叉搜索树的第 k 个节点
// 给定一棵二叉搜索树，请找出其中的第k小的结点。 例如， （5，3，7，2，4，6，8） 中，按结点数值大小顺序第三小结点的值为4

// 递归实现
function kthNode(root, k) {
  const array = loopThrough(root)

  return array[k - 1]
}

function loopThrough(root, array = []) {
  if (root) {
    loopThrough(root.left)
    array.push(root.val)
    loopThrough(root.right)
  }

  return array
}

// 非递归实现
function kthNode2(root, k) {
  const stack = []
  const result = []

  let current = root

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current)
      current = current.left
    }

    current = stack.pop()
    result.push(current)
    current = current.right
  }

  if (k > 0 && k <= result.length) {
    return result[k - 1]
  }

  return null
}
