function balanced(node) {
  if (!node) {
    return 0
  }

  const left = balanced(node.left)
  const right = balanced(node.right)

  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1
  }

  return Math.max(left, right) + 1
}

export function isBalancedSolution(pRoot) {
  return balanced(pRoot) !== -1
}
