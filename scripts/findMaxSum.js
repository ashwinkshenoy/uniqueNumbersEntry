// Input: [1,2,3,4]

// Execution:
// 1 -> (2+3+4) = 9
// 2 -> (1+3+4) = 8
// 3 -> (1+2+4) = 7
// 4 -> (1+2+3) = 6
// ...

// Output
// minSum -> 9
// maxSum -> 6

function findMinMax(array) {
  let minNumber = Math.min.apply(null, array);
  let maxNumber = Math.max.apply(null, array);

  let arraySum = array.reduce((acc, item) => acc + item);

  let minSum = arraySum - minNumber;
  let maxSum = arraySum - maxNumber;

  return {minSum, maxSum}
}

console.log(findMinMax([1,3,4,2]))
