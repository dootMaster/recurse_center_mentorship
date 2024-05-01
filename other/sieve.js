// write a function that returns the number of primes up to a given number (n)

// 2 4 6 8  ...
//  3  6   9 12 ...
// 1 2 3 5 7      11  13
//      4 6 8 9 10  12   14

const findNumberOfPrimes = n => {
  const numbersList = new Array(n).fill(true) //zero index will produce off by one

  for (let i = 2; i < n; i++) {
    if (numbersList[i] === false) {
      continue
    }
    for (let j = 2 ; (i * j) < n ; j++) {
      numbersList[i * j] = false
    }
  }

  let primeCount = 0
  for (let i = 0; i < numbersList.length - 1; i++) {
    if (numbersList[i] === false) {
      primeCount++
    }
  }

  primeCount++
  console.log(numbersList.map((flag, i) => {
    return { number: i, prime: flag }
  }))

  return primeCount
}

// findNumberOfPrimes(14)
console.log(findNumberOfPrimes(14)) //7