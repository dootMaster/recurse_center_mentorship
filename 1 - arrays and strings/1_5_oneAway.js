// check if two strings are 1 or 0 edits away.
// an edit is a delete, replace, or insert.

const oneAwayOld = (str1, str2) => {
  if (str1 === str2) return true;

  // if (lengthChecker > 1) return false;

  // if (lengthChecker === 0) {
  //   return replaceChecker(str1, str2);
  // }

  // if (!replaceChecker(str1, str2)) return false;


}

// o(n) time?
// definitely o(1) space

const oneAway = (str1, str2) => {
  if (str1 === str2) return true

  const longerString = str1.length > str2.length ? str1 : str2;
  const shorterString = str1.length <= str2.length ? str1 : str2;

  let i = 0
  let j = 0
  let differences = 0

  while (i < longerString.length && j < shorterString.length) {
    if (longerString[i] === shorterString[i]) {
      i++
      j++
    } else {
      differences++
      if (longerString.length > shorterString.length) {
        i++
      } else if (longerString.length < shorterString.length) {
        j++
      } else {
        i++
        j++
      }
    }
  }
  return differences <= 1
}

const str1 = "qwerty"
const str2 = "wertyq"

console.log(oneAway(str1, str2))



// const lengthChecker = (str1, str2) => {
//   //same length or one length away
//   const difference = Math.abs(str1.length - str2.length);
//   return difference;
// }

// given the same order,
// if there is an extra letter, there would be one extra entry in a map
// if there is one letter less, same thing

// can't just count in map because what if the letters aren't in order?
// >> maybe we can avoid a map just by doing a sliding window first

// if one of the strings is shorter, turn it into a sliding window of the larger string?

// (probably not?) so confirm if the two are the same length first, and if so, just count in a map


// if I perform a sliding window, maybe we can also avoid calling lengthChecker...



// const replaceChecker = (str1, str2) => {
//   let differences = 0;
//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] !== str2[i]) differences++;
//     if (differences > 1) return false;  // is it better to break early here
//   }                                     // or just check after the loop?
// }



