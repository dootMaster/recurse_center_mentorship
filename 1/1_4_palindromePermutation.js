// Given a string, determine if it is a permutation of a palindrome.

// input example

let case0 = "Tact Coa" // true

// time complexity - O(n)
// space complexity - O(n)

const checker = (str) => {
  // iterate through string and count the characters
  // check for even amount of characters, and if a single character appears once
  const map = {}
  for (let i = 0; i < str.length; i++) {  // generally if you iterate through everything once from 0 to end,
    if (str[i] === " ") {                 // it's better to for-of loop.
      continue;
    }

    let currentLetter = str[i].toLowerCase()

    // if (!map[currentLetter]) {
    //   map[currentLetter] = 1;
    // } else {
    //   map[currentLetter]++;
    // }

    map[currentLetter] ? map[currentLetter]++ : map[currentLetter] = 1

    map[currentLetter] = map[currentLetter] ? map[currentLetter] + 1 : 1
  }

  let amountOfOddEntries = 0;

  for (const entry in map) {
    // check if entry is even
    // if not, increment odd entries variable
    if (!(map[entry] % 2 === 0)) {
      amountOfOddEntries++;
    }
  }

  return amountOfOddEntries <= 1;
}

console.log(checker(case0));