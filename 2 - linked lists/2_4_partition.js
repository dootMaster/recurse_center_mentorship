const { Node, LinkedList } = require('./shared/singlyLinkedList')

// time o(n)
// space o(1)

const case0 = new LinkedList()

case0.append(3) // < lessThanSublist
case0.append(5) // < partitionSublist
case0.append(8) //
case0.append(5)
case0.append(10)
case0.append(2) // <
case0.append(1)
// 5
// 8 -> 5
// 5 -> 8 -> 5
//10 -> 5 ...
//

const partitionList = (list, partition) => {
  let currentNode = list.head
  let lessThanSublistHead
  let lessThanSublist
  let partitionSublistHead
  let partitionSublist

  let counter = 0

  while (currentNode) {
    if (currentNode.data >= partition && !partitionSublist) {
      partitionSublistHead = currentNode
      partitionSublist = partitionSublistHead
    } else if (currentNode.data >= partition) {
      partitionSublist.next = currentNode
      partitionSublist = partitionSublist.next
    } else if (!lessThanSublistHead && currentNode.data < partition) {
      lessThanSublistHead = currentNode
      lessThanSublist = lessThanSublistHead
    } else {
      lessThanSublist.next = currentNode
      lessThanSublist = lessThanSublist.next
    }

    currentNode = currentNode.next
  }

  let l1 = new LinkedList()
  l1.head = lessThanSublistHead
  let l2 = new LinkedList()
  l2.head = partitionSublistHead

  partitionSublist.next = null
  lessThanSublist.next = partitionSublistHead

  // l1.print()
  // console.log('----------------')
  // l2.print()
  const result = new LinkedList()

  result.head = lessThanSublistHead

  return result
}

partitionList(case0, 2).print()