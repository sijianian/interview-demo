// 递归实现
export const postorderTraversal = (root, array) => {
  if (!root) {
    return array
  }

  postorderTraversal(root.left, array)
  postorderTraversal(root.right, array)
  array.push(root.val)

  return array
}

// 非递归实现
export const postorderTraversal2 = root => {
  const result = []
  const stack = []

  let last = null
  let current = root

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current)
      current = current.left
    }

    current = stack[stack.length - 1]

    if (!current.right || current.right === last) {
      current = stack.pop()
      result.push(current.val)
      last = current
      current = null
    } else {
      current = current.right
    }
  }
}
