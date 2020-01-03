function quickSort(array) {
  if(array.length < 2) {
    return array;
  }

  let pivot = array[0];
  let lesserArray = [];
  let greaterArray = [];

  for(let i = 1; i < array.length; i++) {
    if(array[i] > pivot) {
      greaterArray.push(array[i])
    } else {
      lesserArray.push(array[i])
    }
  }

  return quickSort(lesserArray).concat(pivot, quickSort(greaterArray));
}

console.time("quickSort");
console.log(quickSort([2,1,3]));
console.log(quickSort([2,1,3,3,0,5,3,90,8,43]));
console.timeEnd("quickSort");

