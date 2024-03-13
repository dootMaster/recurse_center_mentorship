const StackArray = require("./shared/Arr_stack")

class StackArrayWithMin extends StackArray {
  constructor() {
    super()
    this._min = new StackArray()
  }

  push(data) {
    super.push(data)
    const peek = this._min.peek()
    if (peek < data) {
      this._min.push(peek)
    } else {
      this._min.push(data)
    }
  }

  pop() {
    this._min.pop()
    return super.pop()
  }

  getMin() {
    return this._min.peek()
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




