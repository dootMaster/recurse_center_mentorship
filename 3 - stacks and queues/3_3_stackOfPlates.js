// implement a set of stacks where upon hitting a limit, the set starts
// a new stack.

// extra: implement a popAtIndex

//turn off emmet

const { StackLinkedList } = require('./shared/LL_stack')

class SetOfStacks {
  constructor(limit) {
    this._limit = limit
    this.total = 0
    this._stackList = [new StackLinkedList()]
  }

  _isTopSubstackFull() {
    const size = this._getStackListTop().getSize()
    return size === this._limit
  }

  _isTopSubstackEmpty() {
    const size = this._getStackListTop().getSize()
    return size === 0
  }

  _getStackListTop() {
    return this._stackList[this._stackList.length - 1]
  }

  _pushIntoTopSubstack(data) {
    this._getStackListTop().push(data)
  }

  _pushIntoNewSubstack(data) {
    this._stackList.push(new StackLinkedList())
    this._getStackListTop().push(data)
  }

  push(data) {
    if (this._isTopSubstackFull()) {
      this._pushIntoNewSubstack(data)
    } else {
      this._pushIntoTopSubstack(data)
    }
    this.total++
  }

  _popFromTopSubstack() {
    this._getStackListTop().pop()
  }

  _handleRemoveEmptyStack() {
    if (this._isTopSubstackEmpty() && this._stackList.length > 1) {
      this._stackList.pop()
    }
  }

  pop() {
    const popData = this._popFromTopSubstack()
    this._handleRemoveEmptyStack()
    this.total--
    return popData
  }

  //

  popAtIndex(index) {
    let stackIndex = 0
    while ()
  }
}

const setOfStacks = new SetOfStacks(3)

for (let i = 0; i < 10; i++) {
  setOfStacks.push(i)
}

// console.log(setOfStacks._stackList)
for (let stack of setOfStacks._stackList) {
  stack.print()
}

setOfStacks.pop()
setOfStacks.pop() //

for (let stack of setOfStacks._stackList) {
  stack.print()
}