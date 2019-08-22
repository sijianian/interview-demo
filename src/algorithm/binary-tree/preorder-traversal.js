// 递归实现
function preorderTraversal(root, array = []) {
  if (root) {
    array.push(root.val)
    preorderTraversal(root.left, array)
    preorderTraversal(root.right, array)
  }
}

// 非递归实现
function preorderTraversal2(root) {
  const stack = []
  const result = []

  let current = root

  while (current || stack.length) {
    while (current) {
      result.push(current.val)
      stack.push(current)
      current = current.left
    }

    current = stack.pop()
    current = current.right
  }
}
