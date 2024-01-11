// write an algorithm such that if an element is 0, the column and row of that element are set to 0

let case0 = [
  [1, 9, 3, 7, 0],
  [5, 2, 8, 0, 6],
  [6, 7, 3, 4, 8],
  [9, 4, 2, 1, 3],
  [5, 8, 1, 7, 6],
];

let case1 = [
  [2, 0, 7, 1, 0],
  [4, 5, 0, 8, 3],
  [3, 9, 0, 6, 2],
  [7, 4, 1, 2, 8],
  [1, 6, 3, 9, 5],
];

let case2 = [
  [3, 5, 9, 8, 6],
  [5, 1, 6, 7, 2],
  [7, 4, 3, 2, 8],
  [1, 6, 9, 5, 0],
];
// [x, x, 0, x, x],
// [x, x, x, x, x],
// [7, 4, x, 2, x],
// [x, x, x, x, 0],

const zeroMatrix = matrix => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; i++) {

    }
  }
}

const flagWrite = (i, j, matrix) => {
  const jLimit = matrix[0].length
  const iLimit = matrix.length

  let up = i - 1
  let down = i + 1
  let left = j - 1
  let right = j + 1

  while (up >= 0) {
    if (matrix[up][j] !== 0) {
      matrix[up][j] = 'x'
    }
    up--
  }

  while (down < iLimit) {
    if (matrix[down][j] !== 0) {
      matrix[down][j] = 'x'
    }
    down++
  }

  while (left >= 0) {
    if (matrix[i][left] !== 0) {
      matrix[i][left] = 'x'
    }
    left--
  }

  while (right < jLimit) {
    if (matrix[i][right] !== 0) {
      matrix[i][right] = 'x'
    }
    right++
  }

  return matrix
}

console.log(flagWrite(1, 3, case0))

