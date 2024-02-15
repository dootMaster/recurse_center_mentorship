const StackArray = require("./shared/Arr_stack")

class StackArrayWithMin extends StackArray {
  constructor() {
    super()
    this._min = []
  }

  push(data) {
    super.push(data)
    this._minPush(data)
  }

  pop() {
    this._minPop()
    return super.pop()
  }

  _minPush(data) {
    if (this._min.length === 0) {
      this._min.push(data)
    } else if (data <= this._min[this._min.length - 1]) {
      this._min.push(data)
    } else {
      this._min.push(this._min[this._min.length - 1])
    }
  }

  _minPop() {
    if (this._min.length) {
      this._min.pop()
    }
  }

  getMin() {
    if (this._min.length) {
      return this._min[this._min.length - 1]
    } else {
      return undefined
    }
  }
}

module.exports = StackArrayWithMin

const stack = new StackArrayWithMin()

for(let i = 5; i >= 0; i--) {
  stack.push(i)
}

stack.print()
console.log("min: ", stack.getMin())
stack.pop()
console.log("min: ", stack.getMin())
stack.print()
stack.push(-2)
console.log("min: ", stack.getMin())
stack.print()
stack.pop()
console.log("min: ", stack.getMin())
stack.print()




