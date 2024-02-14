class StackArray {
  constructor() {
    this._stack = []
    this._min = []
  }

  push(data) {
    this._stack.push(data)
    this._minPush(data)
  }

  pop() {
    if (this._stack.length !== 0) {
      this._minPop()
      return this.stack.pop()
    } else {
      return undefined
    }
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

  print() {
    if (this._stack.length) {
      for(item in this._stack) {
        console.log(item)
      }
    }
  }
}