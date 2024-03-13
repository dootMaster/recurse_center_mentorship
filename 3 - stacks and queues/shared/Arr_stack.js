class StackArray {
  constructor() {
    this._stack = []
  }

  push(data) {
    this._stack.push(data)
  }

  pop() {
    if (this._stack.length !== 0) {
      return this._stack.pop()
    } else {
      return undefined
    }
  }

  printSequential() {
    if (this._stack.length) {
      for(let item in this._stack) {
        console.log(item)
      }
    }
  }

  peek() {
    return this._stack[this._stack.length - 1]
  }

  isEmpty() {
    return this._stack.length === 0
  }

  print() {
    console.log(this._stack)
  }
}

module.exports = { StackArray }