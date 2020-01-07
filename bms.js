function retreiveNumbers() {
  prevNumber.innerHTML = JSON.parse(localStorage.getItem('numbers'))
}

function getNumber(value) {
  let number = value
  if(/^[a-zA-Z]/.test(number)) return;
  number = number.split(',')
  
  // Get Range
  range = number.filter((item) => {
    if(item.indexOf("-") != -1) {
      return item
    }
  })

  // Get numbers(without range)
  number = number.filter((item) => {
    if(item.indexOf("-") == -1) {
      return parseInt(item)
    }
  })
  
  // Get ranges
  newRange = range.map((item) => {
    let value = item.split('-');
    value = getRange(parseInt(value[0]), parseInt(value[1]))
    return value
  });
  
  newRange = [].concat.apply([], newRange)
  newRange = [... new Set(newRange)]
  number = number.map(Number);

  uniqueNumber.innerHTML = number
  rangeNumber.innerHTML = newRange
  localNumbers = localStorage.getItem('numbers') || [];

  if(localNumbers.length > 0) {
    localNumbers = JSON.parse(localNumbers);
  }
  
  
  let values = [ ...newRange, ...number, ...localNumbers].sort((a,b) => a-b)
  values = [... new Set(values)]
  
  if(localNumbers.length > 0) {
    diffNumber.innerHTML = values.filter((i) => !localNumbers.includes(i))
  }
  localStorage.setItem('numbers', JSON.stringify(values))
  return values;
}


function getRange(start, end) {
  if(start === end) return [start];
  return [start, ...getRange(start + 1, end)];
}


function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


let init = debounce(function() {
	let values = getNumber(this.value);
  console.log(values)
}, 500);


const uniqueNumber = document.getElementById('uniqueNumbers');
const rangeNumber = document.getElementById('rangeNumbers');
const prevNumber = document.getElementById('prevNumbers');
const diffNumber = document.getElementById('diffNumbers');

window.onload = retreiveNumbers();

document.getElementById('number').addEventListener('input', init);
