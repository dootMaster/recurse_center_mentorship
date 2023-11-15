// perform a simple string compression
// strings will only contain a-z or A-Z
// if the compressed string would be longer, just return the original string

const case0 = "aaaaaaa"
const case1 = "aaabbcc"
const case2 = "abcde"  //a1b1...

const stringCompression = str => {
  if (str.length === 0) return

  let result = str[0]
  let count = 1

  // while (true) {
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++
    } else {
      result += count.toString()
      count = 1

      result += str[i]
    }
    //if ?exit
  }

  result += count.toString()

  return result
}

console.log(stringCompression(case0))
console.log(stringCompression(case1))
console.log(stringCompression(case2))