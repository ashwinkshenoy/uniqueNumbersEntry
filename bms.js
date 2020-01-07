
const uniqueNumber = document.getElementById('uniqueNumbers');
const rangeNumber = document.getElementById('rangeNumbers');
const prevNumber = document.getElementById('prevNumbers');
const diffNumber = document.getElementById('diffNumbers');

window.onload = retreiveNumbers();

function retreiveNumbers() {
  prevNumber.innerHTML = JSON.parse(localStorage.getItem('numbers'))
}

document.getElementById('number').addEventListener('change', init);

function init() {
  let values = getNumber(this.value)

}

function getNumber(value) {
  let number = value
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
    localNumbers = JSON.parse(localNumbers)
  }
  
  
  let values = [ ...newRange, ...number, ...localNumbers].sort()
  values = [... new Set(values)]
  
  localStorage.setItem('numbers', JSON.stringify(values))
  diffNumber.innerHTML = values.filter((i) => !localNumbers.includes(i))
  return values;
}

function getRange(start, end) {
  if(start === end) return [start];
  return [start, ...getRange(start + 1, end)];
}
