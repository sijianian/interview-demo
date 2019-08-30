function findInMatrixArray(target, array) {
  let i = array.length // 行数
  let j = array[0].length // 列数

  while (i >= 0 && array[i][j]) {
    if (target < array[i][j]) {
      i--
    } else if (target > array[i][j]) {
      j++
    } else {
      return true
    }
  }

  return false
}
