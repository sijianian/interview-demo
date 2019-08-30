class Stack {
  list = []

  push(node) {
    this.list.push(node)
  }

  pop() {
    return this.list.pop()
  }

  isEmpty() {
    return this.list.length === 0
  }
}

let stack1 = new Stack()
let stack2 = new Stack()

function push(node) {
  stack1.push(node)
}

function pop() {
  if (stack1.isEmpty() && stack2.isEmpty()) {
    throw new Error('Queue is empty')
  }
  if (stack2.isEmpty()) {
    while (!stack1.isEmpty()) {
      stack2.push(stack1.pop())
    }
  }
  return stack2.pop()
}
