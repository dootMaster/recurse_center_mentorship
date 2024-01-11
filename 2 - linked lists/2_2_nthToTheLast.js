const { Node, LinkedList } = require('./shared/singlyLinkedList')

// write a function that returns the nth to the last node

const case0 = new LinkedList()

case0.append(4)
case0.append(3)
case0.append(6)
case0.append(3)
case0.append(2)
case0.append(5)

const case2 = new LinkedList()

case2.append(2)
case2.append(3)
case2.append(4)
case2.append(2)
case2.append(6)
case2.append(5)

const returnNthFromEnd = (linkedList, n) => {
  let totalNodes = 0
  let latePointer = undefined
  let currentNode = linkedList.head
  while (currentNode) {
    if (totalNodes === n + 1) {
      latePointer = linkedList.head
    }

    totalNodes++
    currentNode = currentNode.next

    if (latePointer) {
      latePointer = latePointer.next
    }
  }

  if (!latePointer) {
    return currentNode // why does this return null
  } else {
    return latePointer
  }
}

// try to solve by moving L40-L44 logic into while loop

console.log(returnNthFromEnd(case0, 5))
console.log(returnNthFromEnd(case2, 5))