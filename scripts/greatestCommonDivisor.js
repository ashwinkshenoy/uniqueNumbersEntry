function greatestCommonDivisor(a, b){
  if(b == 0) {
    return a;
  } else {
    return greatestCommonDivisor(b, a%b);
  }
}

console.log(greatestCommonDivisor(14, 21));

console.log(greatestCommonDivisor(69, 169));
