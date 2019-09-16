export const inorderTraversal = (root, array) => {
  if (!root) {
    return array
  }

  inorderTraversal(root.left, array)
  array.push(root.val)
  inorderTraversal(root.right, array)
}

export const inorderTraversal2 = root => {
  const stack = []
  const result = []

  let current = root

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current)
      current = current.left
    }

    current = stack.pop()
    result.push(current.val)
    current = current.right
  }

  return result
}

export const preorderTraversal = (root, array = []) => {
  if (!root) {
    return array
  }

  array.push(root.val)
  preorderTraversal(root.left)
  preorderTraversal(root.right)
}

export const preorderTraversal2 = root => {
  const stack = []
  const result = []

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

export const postorderTraversal = (root, array = []) => {
  if (!root) {
    return array
  }

  postorderTraversal(root.left, array)
  postorderTraversal(root.right, array)
  array.push(root.val)
}

export const postorderTraversal2 = root => {
  const stack = []
  const result = []

  let current = root
  let last = null

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

  return result
}

export const swap = (array, left, right) => {
  const rightValue = array[right]
  array[right] = array[left]
  array[left] = rightValue
}

// 冒泡
export const bubble = array => {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; i < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
      }
    }
  }
  return array
}

// 插入
export const insert = array => {
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j >= 0 && array[j] > array[j + 1]; j--) {
      swap(array, j, j + 1)
    }
  }
}

// 选择
export const select = array => {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; i < array.length; j++) {
      minIndex = array[j] < array[minIndex] ? j : minIndex
    }
    swap(array, i, minIndex)
  }
  return array
}

export const qSort = array => {
  const left = []
  const right = []

  const index = Math.floor(array.length / 2)
  const mid = array[index]

  for (let i = 0; i < array.length; i++) {
    if (array[i] < mid) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return qSort(left).concat(mid, qSort(right))
}
