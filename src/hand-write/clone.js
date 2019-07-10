function shallowClone(obj) {
  const result = {}

  for (let i in obj) {
    result[i] = obj[i]
  }
  return result
}

function deepClone() {}
