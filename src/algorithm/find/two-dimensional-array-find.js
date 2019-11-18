/**
描述：
在一个二维数组中（每个一维数组的长度相同）
每一行都按照从左到右递增的顺序排序
每一列都按照从上到下递增的顺序排序
请完成一个函数
输入这样的一个二维数组和一个整数
判断数组中是否含有该整数

思路：
将二维数组看作平面坐标系
从左下角（0,arr.length-1）开始比较：
目标值大于坐标值---x坐标+1
目标值小于坐标值---y坐标-1

注意：
二维数组arr[i][j]中
j代表x坐标
i代表y坐标
 */

const compare = (target, array, i, j) => {
  if (array[i] === undefined || array[i][j] === undefined) {
    return false
  }

  const temp = array[i][j]

  if (target === temp) {
    return true
  } else if (target > temp) {
    return compare(target, array, i, j + 1)
  } else if (target < temp) {
    return compare(target, array, i - 1, j)
  }
}

export const find = (target, array) => {
  const i = array.length - 1 // y 坐标
  const j = 0 // x 坐标

  return compare(target, array, i, j)
}
