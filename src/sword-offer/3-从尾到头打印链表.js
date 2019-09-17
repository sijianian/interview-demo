export function ListNode(val) {
  this.val = val
  this.next = null
}

export function printListFromTailToHead(head) {
  const res = []

  while (head) {
    res.unshift(head.val)
    head = head.next
  }

  return res
}
