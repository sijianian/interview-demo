/*
题目：
输入一个链表，反转链表后，输出新链表的表头
*/

export const reverseList = head => {
  let currentNode = null
  let headNode = head

  while (head && head.next) {
    currentNode = head.next
    head.next = currentNode.next

    currentNode.next = headNode
    headNode = currentNode
  }

  return headNode
}
