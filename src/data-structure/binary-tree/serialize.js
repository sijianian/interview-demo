function Serialize(pRoot, arr = []) {
  if (!pRoot) {
    arr.push('#')
  } else {
    arr.push(pRoot.val)
    Serialize(pRoot.left, arr)
    Serialize(pRoot.right, arr)
  }
  return arr.join(',')
}

function Deserialize(s) {
  if (!s) {
    return null
  }
  return deserialize(s.split(','))
}

function deserialize(arr) {
  let node = null
  const current = arr.shift()
  if (current !== '#') {
    node = { val: current }
    node.left = deserialize(arr)
    node.right = deserialize(arr)
  }
  return node
}
