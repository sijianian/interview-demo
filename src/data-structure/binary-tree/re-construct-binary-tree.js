class TreeNode {}

export function reConstructBinaryTree(pre, mid) {
  if (pre.length === 0) {
    return null
  }

  if (pre.length === 1) {
    return new TreeNode(pre[0])
  }

  const value = pre[0]
  const index = mid.indexOf(value)

  const midLeft = mid.slice(0, index)
  const midRight = mid.slice(index + 1)

  const preLeft = pre.slice(1, index + 1)
  const preRight = pre.slice(index + 1)

  const node = new TreeNode(value)

  node.left = reConstructBinaryTree(preLeft, midLeft)
  node.right = reConstructBinaryTree(preRight, midRight)

  return node
}

export function getHRD(pre, mid) {
  if (!pre) {
    return ''
  }

  if (pre.length === 1) {
    return pre
  }

  const head = pre[0]
  const splitIndex = mid.indexOf(head)

  const midLeft = mid.substring(0, splitIndex)
  const midRight = mid.substring(splitIndex + 1)

  const preLeft = pre.substring(1, splitIndex + 1)
  const preRight = pre.substring(splitIndex + 1)

  return getHRD(preLeft, midLeft) + getHRD(preRight, midRight)
}
