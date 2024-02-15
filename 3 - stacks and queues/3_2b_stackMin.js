const { StackLinkedList, Node } = require("./shared/LL_stack")

class StackLinkedListWithMin extends StackLinkedList {
  constructor() {
    super()
    this._minHead = null
  }

  push(data) {
    this._minPush(data)
    super.push(data)
  }

  pop() {
    this._minPop()
    return super.pop()
  }

  _minPush(data) {
    let newHead = new Node(data)
    if (this._minHead === null) {
      this._minHead = newHead
    } else if (data < this._minHead.data) {
      const currentMinHead = this._minHead
      this._minHead = newHead
      this._minHead.next = currentMinHead
    } else {
      newHead = new Node(this._minHead.data)
      const currentMinHead = this._minHead
      this._minHead = newHead
      this._minHead.next = currentMinHead
    }
  }

  _minPop() {
    if (this._minHead) {
      this._minHead = this._minHead.next
    }
  }

  getMin() {
    if (this._minHead.data) {
      return this._minHead.data
    } else {
      return undefined
    }
  }
}

