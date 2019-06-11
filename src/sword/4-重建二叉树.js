function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}

function rebuildBinaryTree(pre, mid) {
  if (!pre || pre.length === 0) {
    return
  }

  let treeNode = new Node(pre[0])

  for (let i = 0; i < mid.length; i++) {
    if (mid[i] === pre[0]) {
      treeNode.left = rebuildBinaryTree(pre.slice(1, i + 1), mid.slice(0, i))
      treeNode.right = rebuildBinaryTree(pre.slice(i + 1), mid.slice(i + 1))
    }
  }

  return treeNode
}
