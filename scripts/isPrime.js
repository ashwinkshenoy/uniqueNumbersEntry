// Check if given number is prime or not


function isPrime(n){
  let divisor = 2;
  let limit = Math.sqrt(n);

  //check simple cases
  if (n == 2 || n == 3)
    return true;
  if (n % 2 == 0)
    return false;

  while (divisor <= limit) {
    if (n % divisor == 0)
      return false;
    else
      divisor += 2;
  }
  return true;
}

console.time("isPrime");
console.log(isPrime(127)) // true
console.timeEnd("isPrime");

// console.log(isPrime(150)) // false
