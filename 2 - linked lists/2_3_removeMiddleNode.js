const { Node, LinkedList } = require('./shared/singlyLinkedList')

// you are given a node whose location is in the middle of a linked list
// remove only this node from the linked list.

const case0 = new LinkedList()

case0.append(4)
case0.append(3)
case0.append(6)
case0.append(3)
case0.append(2)
case0.append(5)

const removeMiddleNode = node => {
  node.data = node.next.data
  node.next = node.next.next
}

const middleNode = case0.head.next.next.next

case0.head = 1234

console.log(case0.head)

// removeMiddleNode(middleNode)

// case0.print()

