const { Node, LinkedList } = require('./shared/singlyLinkedList')

// write a function to determine whether a linked list is a palindrome

const case0 = new LinkedList()

case0.append(4)
case0.append(3)
case0.append(6)
case0.append(3)
case0.append(2)
case0.append(5)

const case1 = new LinkedList()

case1.append(4)
case1.append(3)
case1.append(6)
case1.append(6)
case1.append(3)
case1.append(4)

const case2 = new LinkedList()

case2.append(4)
case2.append(4)
case2.append(4)
case2.append(4)
case2.append(4)
case2.append(4)


const checkPalindrome = (linkedList) => {
  let firstPointer = linkedList.head
  let result = true

  const secondPointer = node => {
    if (node.next) {
      secondPointer(node.next)
    }
    if (firstPointer.data === node.data) {
      firstPointer = firstPointer.next
      return
    } else {
      result = false
      return
    }
  }

  secondPointer(linkedList.head)

  return result
}

console.log(checkPalindrome(case0))
console.log(checkPalindrome(case1))
console.log(checkPalindrome(case2))

