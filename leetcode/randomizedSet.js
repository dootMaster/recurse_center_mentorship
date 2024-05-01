
var RandomizedSet = function() {
  this.set = {}
  this.numberAsKey = {}
  this.maxIndex = 0
  this.freeIndexStack = []
};

/**
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if (this.set[val] === undefined) {
      this.set[val] = this.freeIndexStack.pop() || this.maxIndex
      this.numberAsKey[this.set[val]] = val
      this.maxIndex++
      return true
  } else {
      return false
  }
};

/**
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  if (this.set[val] !== undefined) {
      const deleteIndex = this.set[val]

      delete this.set[val]
      delete this.numberAsKey[deleteIndex]

      if (this.maxIndex === deleteIndex) {
          this.maxIndex--
      }

      this.freeIndexStack.push(deleteIndex)

      return true
  } else {
      return false
  }

};

/**
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  let randomIndex
  do {
      randomIndex = this._generateRandomIndex(this.maxIndex)
  } while (this.numberAsKey[randomIndex] === undefined)
  return this.numberAsKey[randomIndex]
};

RandomizedSet.prototype._generateRandomIndex = function(max) {
  return Math.floor(Math.random() * (max + 1))
}


const testRandomizedSet = new RandomizedSet()
testRandomizedSet.insert(1)
testRandomizedSet.remove(2)
testRandomizedSet.insert(2)
testRandomizedSet.getRandom()
testRandomizedSet.remove(1)
testRandomizedSet.insert(2)
testRandomizedSet.getRandom()

const testRandomizedSet2 = new RandomizedSet()
testRandomizedSet2.remove(0)
testRandomizedSet2.remove(0)
testRandomizedSet2.insert(0)
testRandomizedSet2.getRandom()
testRandomizedSet2.remove(0)
testRandomizedSet2.insert(0)
testRandomizedSet2.getRandom()