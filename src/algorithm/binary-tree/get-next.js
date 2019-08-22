function GetNext(pNode) {
  if (!pNode) {
    return null
  }
  if (pNode.right) {
    pNode = pNode.right
    while (pNode.left) {
      pNode = pNode.left
    }
    return pNode
  } else {
    while (pNode) {
      if (!pNode.next) {
        return null
      } else if (pNode == pNode.next.left) {
        return pNode.next
      }
      pNode = pNode.next
    }
    return pNode
  }
}
