// Sort linked list
// (Not the most optimal)

const list = [
  {
    id: 7,
    next: 8
  },
  {
    id: 2,
    next: 6
  },
  {
    id: 6,
    next: 7
  },
  {
    id: 8,
    next: 9
  },
];

function sortList(list) {
  let b = [];

  for(let i=0; i<list.length; i++) {
    for(let j=i+1; j<list.length; j++) {
      if(list[i].id !== list[j].next) {
        b.push(list[j]);
      }
      break;
    }
    break;
  }

  return b
}

function naiveSort(linkedList) {
  var sortedList = sortList(linkedList);
  var index = 0;
  var next = sortedList[index].next;

  while (sortedList.length < linkedList.length) {
    var current = linkedList[index];
    if (current.id === next) {
      next = current.next;
      sortedList.push(current);      
      index = 0;
    } else {
      index += 1
    }
  }

  return sortedList;
}

console.time("sort");
console.log(naiveSort(list))
console.timeEnd("sort");
