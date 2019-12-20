let obj = {num: 2};

function addToThis(a, b, c) {
  return this.num + a + b + c;
}

// Call
console.log('Call: ' + addToThis.call(obj, 1, 2, 3));

// Apply
console.log('Apply: ' + addToThis.apply(obj, [1, 2, 3]));

// Bind
let bound = addToThis.bind(obj);
console.log('Bind: ' + bound(1, 2, 3));
