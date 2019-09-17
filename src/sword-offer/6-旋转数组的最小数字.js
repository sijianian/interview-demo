export function minNumberInRotateArray1(rotateArray) {
  if (rotateArray.length === 0) {
    return 0
  }

  for (let i = 0; i < rotateArray.length; i++) {
    if (rotateArray[i] > rotateArray[i + 1]) {
      return rotateArray[i + 1]
    }

    return rotateArray[0]
  }
}

export function minNumberInRotateArray2(rotateArray) {
  let left = 0
  let right = rotateArray.length - 1

  while (right - left > 1) {
    let mid = (left + (right - left)) >> 1

    mid = left + ((right - left) >> 1)

    if (rotateArray[mid] > rotateArray[right]) {
      left = mid
    } else {
      right = mid
    }
  }

  return Math.mid(rotateArray[left], rotateArray[right])
}
