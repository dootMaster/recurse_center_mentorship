/*
  Given two strings, write a method to decide if one is a
  permutation of the other.
*/

// mapping method
// time complexity - O(n)
// space complexity - O(n)

// sort and compare method
// time complexity - O(n log n)
// space complexity -

let case0 = "abcde"
let case1 = "abcde"
let case2 = "edcba"
let case3 = "aaaaa"
let case4 = ""

const isPermutationOf = (str1, str2) => {
  // if (str1.length != str2.length) {
  //   return false
  // }
  // ^^ best = O(1)
  // ^^ worst/average = (n+n) = (2n) = (n)
  let sortedStr1 = str1.split('').sort().join('') // Array.from(str1)
  let sortedStr2 = str2.split('').sort().join('')

  // console.log(sortedStr1, sortedStr2)

  return sortedStr1 === sortedStr2
}

console.log(isPermutationOf(case0, case1)) // true
console.log(isPermutationOf(case0, case2)) // true
console.log(isPermutationOf(case0, case3)) // false
console.log(isPermutationOf(case0, case4)) // false


