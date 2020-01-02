// Find a missing number in an array

const x = [100,101,103,104,105]
// Expected Output => 7

function missingNumber(arr) {
  let [min, max] = [Math.min(...arr), Math.max(...arr)]
  return Array.from(Array(max-min), (i) => i+min).filter((i) => !arr.includes(i))
}

console.log(missingNumber(x))
