// Find length of number without converting to string
let x = 123456789; // len 9

// Simple/Clean Solution
function integerLength(number){
  return Math.floor(Math.log10(number))+1
}

// Solution with loop
function findLen(x) {
  let counter=0;
  while (x > 10) {
    x = x / 10;
    counter ++;
  }
  return counter + 1
}

console.log(findLen(x));
console.log(integerLength(x));
