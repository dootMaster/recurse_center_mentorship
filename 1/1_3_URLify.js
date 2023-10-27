/* Write a method to replace all spaces in a string with '%20'.

IF WE GET CUT OFF: https://meet.google.com/fgd-zyrp-vjs

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

const URLify = (arr, int) => {
  for()



  return arr
}

console.log(URLify(case0, case0int))