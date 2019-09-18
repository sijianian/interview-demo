function binarySearch(data, arr, start, end) {
  if (start > end) {
    return -1
  }

  // const mid = Math.floor((start + end) / 2)
  const mid = Math.floor(start + ((end - start) >> 1))

  if (data === arr[mid]) {
    return mid
  } else if (data < arr[mid]) {
    return binarySearch(data, arr, start, mid - 1)
  } else {
    return binarySearch(data, arr, mid + 1, end)
  }
}

const arr = [0, 1, 1, 1, 1, 1, 4, 6, 7, 8]
console.log(binarySearch(1, arr, 0, arr.length - 1))
