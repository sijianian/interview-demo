# 二维数组的查找

## 题目描述

在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下的书序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数

## 实现代码

```js
function Find(target, array) {
  var row = array.length
  var i = row - 1
  var j = 0
  while (i >= 0 && array[i][j]) {
    if (array[i][j] < target) {
      j++
    } else if (array[i][j] > target) {
      i--
    } else {
      return true
    }
  }
  return false
}
```

## 思路

矩阵是有序的，从左下角来看，向上数字递减、向右数字递增，因此从左下角开始查找，当要查找的数字比左下角大时，右移；要查找数字比左下角小时，上移。
