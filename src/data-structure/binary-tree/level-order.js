export const levelOrder = root => {
  if (!root) {
    return []
  }

  const result = []
  let queue = [root]

  while (queue.length) {
    const arr = []
    const temp = []

    while (queue.length) {
      const curr = queue.shift()
      arr.push(curr.val)

      if (curr.left) {
        temp.push(curr.left)
      }

      if (curr.right) {
        temp.push(curr.right)
      }
    }

    queue = temp
    result.push(arr)
  }

  return result
}
