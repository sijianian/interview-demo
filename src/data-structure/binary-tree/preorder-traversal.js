// 递归实现
export const preorderTraversal = (root, array = []) => {
  if (!root) {
    return
  }

  array.push(root.val)
  preorderTraversal(root.left, array)
  preorderTraversal(root.right, array)

  return array
}

// 非递归实现
export const preorderTraversal2 = root => {
  const result = []
  const stack = []

  let current = root

  while (current || stack.length > 0) {
    while (current) {
      result.push(current.val)
      stack.push(current)
      current = current.left
    }

    current = stack.pop()
    current = current.right
  }

  return result
}
