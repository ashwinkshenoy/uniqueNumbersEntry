// Find missing number given 2 arrays
// [4, 5, 6, 7, 8]
// [8, 4, 7, 6]
// Output -> 5

const x = [4, 5, 6, 7, 8];
const y = [8, 4, 7, 6]


// Method 1
function findMissing1(arr1, arr2) {
  arr1.sort((a,b) => a-b)
  arr2.sort((a,b) => a-b)

  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return arr1[i];
    }
  }
}
console.time("findMissing1");
console.log(findMissing1(x, y))
console.timeEnd("findMissing1");


// Method 2
function findMissing2(arr1, arr2) {
  return arr1.filter(x => !arr2.includes(x));
}
console.time("findMissing2");
console.log(findMissing2(x, y))
console.timeEnd("findMissing2");
