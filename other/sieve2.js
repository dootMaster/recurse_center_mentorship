// return all prime numbers up to n

// 1 2 3   5
//   2   4   6   8   10   12 ...
//     3     6 ...
//skip   4 ...

const findPrimes = (n) => {
  let primes = new Array(n + 1).fill(true)

  for (let i = 2; i <= n; i++) {
    if (!primes[i]) {
      continue
    }
    for (let j = 2; (j * i) <= n; j++) {
      console.log(i, j, i * j)
      primes[i * j] = false
    }
  }

  // console.log(primes)

  return primes.map((flag, i) => {
    if (flag) return i
  }).filter(item => item)
}

console.log(findPrimes(13))