/* Write a method to replace all spaces in a string with '%20'.

// shift by n in "1" op
// slower = shift b n in "n" ops
in = [H                   ]
out= [     H              ]
*/

//                         13  +4
//                         i   |
const case0 = "Mr John Smith    ".split('')
//                    i
          //  "Mr John  %20Smith"
          //          ^
// output     "Mr%20John%20Smith"

//            "Mr   John Smith  ".split('')
//               ^
//                 grab curr, next
//                 next = curr
//                 repeat
const case0int = 13 // <--

// "Mr   John   Smith"
// " ... "

const URLify = (str, int) => {
  let j = 0;
  for (let i = 0; i < int; i++) {
    if (str[i] === " ") {
      for (j = (str.length - 1); j > (i + 2); j--) {
        str[j] = str[j-2];
      }
      str[j--] = "0"
      str[j--] = "2"
      str[j--] = "%"
    }
  }

  return str.join("")
}

console.log(URLify(case0, case0int))