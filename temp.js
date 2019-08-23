function inorderTraversal(root) {
  const stack = []
  const result = []

  let current = root

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current.left)
      current = current.left
    }

    current = stack.pop()
    result.push(current.val)
    current = current.right
  }

  return result
}
