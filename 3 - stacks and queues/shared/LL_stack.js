class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class StackLinkedList {
  constructor() {
    this.head = null
  }

  push(data) {
    const newHead = new Node(data)

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
      return null
    }
    const currentData = this.head.data
    this.head = this.head.next
    return currentData
  }

  print() {
    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}

const stack = new Stack_LinkedList()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.print()
console.log('---------')
console.log("pop: ", stack.pop())
stack.print()

