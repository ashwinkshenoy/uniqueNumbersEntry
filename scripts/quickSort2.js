// Quick-sort under Hoare partition scheme

function swap(array, i ,j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function partition(array, left, right) {
  let pivot = Math.floor((left+right)/2);

  while(left<right) {
    while(array[left] < array[pivot]) {
      left++
    }
    while(array[right] > array[pivot]) {
      right--;
    }
    if(left <= right) {
      swap(array, left, right);
      left++;
      right--
    }
  }
  return left;
}

function quickSort(array, left, right) {
  left = left || 0;
  right = right || array.length-1;

  let pivot = partition(array, left, right);

  if(left < pivot-1) {
    quickSort(array, left, pivot-1)
  }
  if(right > pivot) {
    quickSort(array, pivot, right)
  }

  return array;
}

console.time("quickSort");
console.log(quickSort([2,1,3]));
console.log(quickSort([2,1,3,3,0,5,3,90,8,43]));
console.timeEnd("quickSort");
console.timelog("quickSort");
