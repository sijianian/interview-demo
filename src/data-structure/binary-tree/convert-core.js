function ConvertCore(node, last) {
  if (node.left) {
    last = ConvertCore(node.left, last)
  }
  node.left = last
  if (last) {
    last.right = node
  }
  last = node
  if (node.right) {
    last = ConvertCore(node.right, last)
  }
  return last
}

export function Convert(pRootOfTree) {
  if (!pRootOfTree) {
    return null
  }
  ConvertCore(pRootOfTree)
  while (pRootOfTree.left) {
    pRootOfTree = pRootOfTree.left
  }
  return pRootOfTree
}
