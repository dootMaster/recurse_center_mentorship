const { Node, LinkedList } = require('./shared/singlyLinkedList')

// 2 4 5 + 3 5 1
//    5
//   9
//  6

const one = new LinkedList()

one.append(8)
one.append(8)
one.append(9)

const two = new LinkedList()

two.append(1)
two.append(1)
two.append(1)
// two.append(0)

//     CO
//  11    | 1
//  9 + 1 | 0
//  10 + 1| 1
//  1     | 1


const reverseSumLists = (list1, list2) => {
  const resultList = new LinkedList()
  let node1 = list1.head
  let node2 = list2.head

  let carryOver = 0
  while (node1 && node2) {
    const value1 = node1.data
    const value2 = node2.data

    let currentSum = value1 + value2 + carryOver

    if (currentSum > 9) {
      let remainder = currentSum % 10
      resultList.append(remainder)
      carryOver = 1
    } else {
      resultList.append(currentSum)
      carryOver = 0
    }

    node1 = node1.next
    node2 = node2.next
  }

  let remainingList = node1 || node2

  while (remainingList) {
    resultList.append(remainingList.data)
    remainingList = remainingList.next
  }

  if (carryOver) {
    resultList.append(carryOver)
  }

  return resultList
}

// reverseSumLists(one, two).print()

// 8 8 9
// 1 1 1
// [9, 9, 10]
// let sum = 0
// sum = 8 * 10
// sum = (80 * 10) + (8 * 10)
// sum = 880 + 9

// listsSums = 1000


const sumLists = (list1, list2) => {
  const sumArr = [] // this probably hurts space complexity

  let node1 = list1.head
  let node2 = list2.head

  while (true) {
    let num1 = 0
    let num2 = 0

    if (!node1 && !node2) {
      break
    }

    if (node1) {
      num1 = node1.data
      node1 = node1.next
    }

    if (node2) {
      num2 = node2.data
      node2 = node2.next
    }

    sumArr.push(num1 + num2)
  }

  let carryOver = 0
  let currentHead = new Node()

  while (true) {
    if (!carryOver && !sumArr.length) {
      break
    }

    const currentSum = sumArr.pop() + carryOver

    if (currentSum > 9) {
      const remainder = currentSum % 10
      currentHead.data = remainder
      carryOver = 1
    } else if (carryOver && !sumArr.length) {
      currentHead.data = 1
      carryOver = 0
    } else {
      currentHead.data = currentSum
      carryOver = 0
    }

    const newHead = new Node()
    newHead.next = currentHead
    currentHead = newHead
  }

  const resultList = new LinkedList()
  resultList.head = currentHead.next
  return resultList
}

sumLists(one, two).print()
