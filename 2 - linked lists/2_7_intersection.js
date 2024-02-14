const { Node, LinkedList } = require('./shared/singlyLinkedList')

// write a function to determine whether two linked lists intersect via reference

const case0 = new LinkedList()

case0.append(4)
case0.append(3)
case0.append(6)
case0.append(3)
case0.append(2)
case0.append(5)

const case1 = new LinkedList()

case1.append(4)

const a = case0.head.next
const b = case0.head.next

const c = case1.head.next

console.log(a == b, a === b)
console.log(a == c, a === c)

// just use Set. MDN:"The Set object lets you store unique values of any type, whether primitive values or object references."
