// 递归实现
export const inorderTraversal = (root, array = []) => {
  if (!root) {
    return array
  }

  inorderTraversal(root.left, array)
  array.push(root.val)
  inorderTraversal(root.right, array)

  return array
}

// 非递归实现
export const inorderTraversal2 = root => {
  const stack = []
  const result = []

  let current = root

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current)
      current = current.left
    }

    current = stack.pop()
    result.push(current.val)
    current = current.right
  }

  return result
}
