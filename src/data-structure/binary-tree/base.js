/**
完全二叉树的一些公式

1. 第 n 层的节点数最多为 2^n 个节点
2. n 层二叉树最多有 2^0 + ... + 2^n = 2^n+1 - 1 个节点
3. 第一个非叶子节点: length / 2
4. 一个节点的孩子节点: 2n、2n + 1
 */

// 以下都是二叉查找树
// 基本结构
class Node {
  constructor(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
  }

  show() {
    console.log(this.data)
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  insert(data) {
    const node = new Node(data, null, null)

    if (!this.root) {
      this.root = node
      return
    }

    let current = this.root
    let parent = null

    while (current) {
      parent = current

      if (data < parent.data) {
        current = parent.left

        if (!current) {
          parent.left = node
          return
        }
      } else {
        current = current.right

        if (!current) {
          parent.right = node
          return
        }
      }
    }
  }

  preOrder(node) {
    if (node) {
      node.show()
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }

  middleOrder(node) {
    if (node) {
      this.middleOrder(node.left)
      node.show()
      this.middleOrder(node.right)
    }
  }

  laterOrder(node) {
    if (node) {
      this.laterOrder(node.left)
      this.laterOrder(node.right)
      node.show()
    }
  }

  getMin() {
    let current = this.root

    while (current) {
      if (!current.left) {
        return current
      }

      current = current.left
    }
  }

  getMax() {
    let current = this.root

    while (current) {
      if (!current.right) {
        return current
      }

      current = current.right
    }
  }

  getDeep(node, deep = 0) {
    if (node === null) {
      return deep
    }

    deep++

    const dLeft = this.getDeep(node.left, deep)
    const dRight = this.getDeep(node.right, deep)

    return Math.max(dLeft, dRight)
  }

  getNode(data, node) {
    if (node) {
      if (data === node.data) {
        return node
      } else if (data < node.data) {
        return this.getNode(data, node.left)
      } else {
        return this.getNode(data, node.right)
      }
    } else {
      return null
    }
  }
}

const t = new Tree()

t.insert(3)
t.insert(8)
t.insert(1)
t.insert(2)
t.insert(5)
t.insert(7)
t.insert(6)
t.insert(0)

console.log(t)
console.log(t.getMin(), t.getMax())
console.log(t.getDeep(t.root, 0))
console.log(t.getNode(5, t.root))
