let isMatchingBrackets = function(str) {

  let stack = [];
  let map = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  for(let i=0; i<str.length; i++) {

    // If charachter has opening braces, push it to stack
    if(str[i] === '(' || str[i] === '{' || str[i] === '[') {
      stack.push(str[i])
    } else { // if character is closing braces, pop from the stack
      let last = stack.pop();

      // if poped element doesnt match the closing brackets of it, return false
      if(str[i] !==map[last]) {
        return false;
      }
    }
  }
  
  // If stack not empty at the end return false
  if(stack.length !== 0) {
    return false;
  }

  return true;
}


console.time("isMatchingBrackets");
console.log(isMatchingBrackets("(){}"));
console.log(isMatchingBrackets("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"));
console.log(isMatchingBrackets("({(()))}}"));
console.timeEnd("isMatchingBrackets");
console.log("**************************");


// Alternate (ES6)

function isBalanced([...str]) {
  return str.reduce((uptoPrevChar, thisChar) => {
    (thisChar === '{' && uptoPrevChar++ || thisChar === '}' && uptoPrevChar--) &&
    (thisChar === '[' && uptoPrevChar++ || thisChar === ']' && uptoPrevChar--) &&
    (thisChar === '(' && uptoPrevChar++ || thisChar === ')' && uptoPrevChar--)
    return uptoPrevChar
  }, 0) === 0
}

console.time("isBalanced");
console.log(isBalanced("(){}"));
console.log(isBalanced("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"));
console.log(isBalanced("({(()))}}"));
console.timeEnd("isBalanced");
