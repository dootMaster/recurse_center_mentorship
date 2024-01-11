const { Node, LinkedList } = require('./shared/singlyLinkedList')

// write code to remove duplicates from an unsorted linked list

const case0 = new LinkedList()

case0.append(4)
case0.append(3)
case0.append(6)
case0.append(3)
case0.append(2)
case0.append(5)

const case1 = new LinkedList()

case1.append(1)
case1.append(1)
case1.append(1)
case1.append(1)
case1.append(1)
case1.append(1)

const case2 = new LinkedList()

case2.append(2)
case2.append(3)
case2.append(4)
case2.append(2)
case2.append(6)
case2.append(5)

// O(n) time
// O(m) space
const removeDupes = (linkedList) => {
  const map = new Map()
  let currentNode = linkedList.head
  let previousNode
  while (currentNode) {
    if (!map.has(currentNode.data)) {
      map.set(currentNode.data, true)
      previousNode = currentNode
      currentNode = currentNode.next
    } else {
      previousNode.next = currentNode.next
      currentNode = previousNode.next
    }
  }
}

// removeDupes(case0)
// case0.print()

// removeDupes(case1)
// case1.print()

removeDupes(case2)
case2.print()

