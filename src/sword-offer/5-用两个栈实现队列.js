export class Stack {
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

const stack1 = new Stack()
const stack2 = new Stack()

export function push(node) {
  stack1.push(node)
}

export function pop() {
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
