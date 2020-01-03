// Given an array of integers, return indices of **2 nos.** such that
// they add up to specified target

function twoSum(arr, target) {
  let numObject = {};
  
  for(let i = 0; i < arr.length; i++) {
    let thisNum = arr[i];
    numObject[thisNum] = i;
  }

  for(let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if(numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
      return [i, numObject[diff]];
      // return [arr[i], parseInt(Object.keys(numObject)[numObject[diff]])];
    } else {
      return 'No number-pair found'
    }
  }
}

console.log(twoSum([1,2,3,4,5], 5))

// Object.keys(foo)[0]
