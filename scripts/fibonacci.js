
// -----
// With Memoization: 
// Is an optimization technique used primarily to speed up 
// computer programs by storing the results of expensive function calls.
// -----
function fibonacci(num, memo) {
  memo = memo || {};
  
  if (memo[num]) return memo[num];
  if (num <= 1) return 1;
  
  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

// -----
// Plain Recursive solution
// -----
// function fibonacci(num) {
//   if (num <= 1) return 1;

//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

console.log(fibonacci(40))
