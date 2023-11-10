// check if two strings are 1 or 0 edits away.
// an edit is a delete, replace, or insert.

const oneAway = (str1, str2) => {
  if (str1 === str2) return true;

  if (lengthChecker > 1) return false;

  if (lengthChecker === 0) {
    return replaceChecker(str1, str2);
  }

  // if (!replaceChecker(str1, str2)) return false;


}

const lengthChecker = (str1, str2) => {
  //same length or one length away
  const difference = Math.abs(str1.length - str2.length);
  return difference;
}

// given the same order,
// if there is an extra letter, there would be one extra entry in a map
// if there is one letter less, same thing

// can't just count in map because what if the letters aren't in order?

// if one of the strings is shorter, turn it into a sliding window of the larger string?

// so confirm if the two are the same length first, and if so, just count in a map
//



// const replaceChecker = (str1, str2) => {
//   let differences = 0;
//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] !== str2[i]) differences++;
//     if (differences > 1) return false;  // is it better to break early here
//   }                                     // or just check after the loop?
// }



