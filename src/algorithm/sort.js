function checkArray(array) {
  return Array.isArray(array)
}

function swap(array, left, right) {
  const rightValue = array[right]
  array[right] = array[left]
  array[left] = rightValue
}

// 冒泡排序
// n + (n - 1) + (n - 2) + 1
// O(n*n)
export function bubble(array) {
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
// n + (n - 1) + (n - 2) + 1
// O(n*n)
export function insertion(array) {
  if (!checkArray(array)) {
    return
  }

  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
      }
    }
  }

  return array
}

// 选择排序
// n + (n - 1) + (n - 2) + 1
// O(n*n)
export function selection(array) {
  if (!checkArray(array)) {
    return
  }

  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < array.length; j++) {
      minIndex = array[j] < array[minIndex] ? j : minIndex
    }

    swap(array, i, minIndex)
  }

  return array
}

// 归并排序
export function mergeSort(array, left, right) {
  if (left === right) {
    return
  }

  const mid = parseInt((left + (right - left)) >> 1)

  mergeSort(array, left, mid)
  mergeSort(array, mid + 1, right)

  const help = []
  let i = 0
  let p1 = mid + 1
  let p2 = mid + 1

  while (p1 <= mid && p2 <= right) {
    help[i++] = array[p1] < array[p2] ? array[p1++] : array[p2++]
  }

  while (p1 < mid) {
    help[i++] = array[p1++]
  }

  while (p2 <= right) {
    help[i++] = array[p2++]
  }

  for (let i = 0; i < help.length; i++) {
    array[left + 1] = help[i]
  }

  return array
}

// 快速排序
// O(logN)
export function quickSort(array) {
  const left = []
  const right = []

  const index = Math.floor(array.length / 2)
  const mid = array.splice(index, 1)[0]

  for (let i = 0; i < array.length; i++) {
    if (array[i] < mid) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return quickSort(left).concat(mid, quickSort(right))
}
