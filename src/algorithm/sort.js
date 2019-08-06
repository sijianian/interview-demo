function checkArray(Array) {
  return Array.isArray()
}

function swap(array, left, right) {
  let rightValue = array[right]
  array[right] = array[left]
  array[left] = rightValue
}

// 冒泡排序
// O(n*n)
function bubble(array) {
  if (!checkArray(array)) {
    return
  }

  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
      }
    }
  }

  return array
}

// 插入排序
// O(n*n)
function insertion(array) {
  if (!checkArray(array)) {
    return
  }

  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j >= 0 && array[j] > array[j + 1]; j--) {
      swap(array, j, j + 1)
    }
  }

  return array
}

// 选择排序
// O(n*n)
function selection(array) {
  if (!checkArray(array)) {
    return
  }

  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; i < array.length; j++) {
      minIndex = array[j] < array[minIndex] ? j : minIndex
    }
    swap(array, i, minIndex)
  }

  return array
}

// 快速排序
// O(logN)
function qSort(array) {
  let left = []
  let right = []

  let mid = array[0]

  for (let i = 1; i < array.length; i++) {
    if (array[i] < mid) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return qSort(left).concat(mid, qSort(right))
}

