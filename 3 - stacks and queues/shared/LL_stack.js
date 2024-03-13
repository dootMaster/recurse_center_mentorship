class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class StackLinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  push(data) {
    const newHead = new Node(data)
    this.size++
    if (!this.head) {
      this.head = newHead
      return
    }

    const currentHead = this.head
    this.head = newHead
    newHead.next = currentHead
  }

  pop() {
    if (!this.head) {
      return undefined
    }
    this.size--
    const currentData = this.head.data
    this.head = this.head.next
    return currentData
  }

  peek() {
    return this.head.data
  }

  getSize() {
    return this.size
  }

  print() {
    let current = this.head
    const printArray = []
    while (current) {
      printArray.push(current.data)
      current = current.next
    }
    console.log(printArray)
  }
}

module.exports = { StackLinkedList, Node }

// const stack = new StackLinkedList()

// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)
// stack.print()
// console.log('---------')
// console.log("pop: ", stack.pop())
// stack.print()

