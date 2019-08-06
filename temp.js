function checkArray(Array) {
  return Array.isArray()
}

function swap(array, left, right) {
  let rightValue = array[right]

  array[right] = array[left]
  array[left] = rightValue
}

// 冒泡排序
function bubble(array) {
  if (!checkArray(array)) {
    return
  }

  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; i++) {
      if (array[j] > array[j + 1]) {
        swap(array, array[j + 1], array[j + 1])
      }
    }
  }

  return array
}

// 插入排序
function insertion(array) {
  if (!checkArray(array)) {
    return
  }

  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i - 1; j >= 0 && array[j] > array[j + 1]; j--) {
      swap(array, array[j], array[j + 1])
    }
  }

  return array
}

// 选择排序
function selection(array) {
  if (!checkArray(array)) {
    return
  }

  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < array.length - 1; j++) {
      minIndex = array[j] < array[minIndex] ? j : minIndex
    }
    swap(array, i, minIndex)
  }

  return array
}
