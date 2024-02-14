const { Node, LinkedList } = require('./shared/singlyLinkedList')

// write a function to determine whether a linked list loops.

const case0 = new LinkedList()

// again just use Set. JS is pass by reference
// set.has(node.next) if false then insert, if true then exit and return true == loopExists