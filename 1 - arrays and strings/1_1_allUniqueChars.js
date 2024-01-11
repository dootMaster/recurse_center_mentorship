let case1 = "abcde"
let case2 = "aabbcc"
let case3 = "abcdefc"

// binary search = log N
// sort = N log N  <----------------------------

//map solution...
// time complexity  = O(N)
// if input is 5 chars long or all unique 25 chars long
//              10                         10    O(1)
//               5                         25    O(N)
// space complexity = O(N) = linear


// time complexity  = O(N^2)
// space complexity = O(1)
const isUnique = (string) => {
  for(let i = 0; i < string.length; i++) {
  	let currentLetter = string[i];
  	for(let j = i + 1; j < string.length; j++) {
    	if(currentLetter === string[j]) {
      	return false;
      }
    }
  }
  return true;
}

console.log(isUnique(case1))
console.log(isUnique(case2))
console.log(isUnique(case3))
