function find(start, end) {
  if (isNaN(start) || isNaN(end) || start < 0 || end < 0) {
    return false
  }
  var result = [];

  var flag
  for (var i = start; i < end + 1; i++) {
    var flag = true
    for (var j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = false
        break
      }
    }
    if (flag == true) {
      result.push(i)
    }
  }
  return result
}
