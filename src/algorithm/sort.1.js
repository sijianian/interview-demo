function swap(array, left, right) {}

// 冒泡排序
function bubble(array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
      }
    }
  }
}
// 插入排序
function insert(array) {

}
// 选择排序
// 快速排序
