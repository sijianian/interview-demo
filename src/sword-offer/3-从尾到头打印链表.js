function ListNode(val) {
  this.val = val
  this.next = null
}

function printListFromTailToHead(head) {
  let res = []

  while(head) {
    res.unshift(head.val)
    head = head.next
  }

  return res
}
