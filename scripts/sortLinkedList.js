// Sort linked list
// (Not the most optimal)

const list = [
  {
    id: 3,
    next: 4
  },
  {
    id: 2,
    next: 3
  },
  {
    id: 1,
    next: 2
  },
];

function sortList(list) {
  let b = [];

  for(let i=0; i<list.length; i++) {
    if(b.length === 0) {
      for(let j=i+1; j<list.length; j++) {
        if(list[i].id !== list[j].next) {
          b.push(list[j]);
          continue;
        }
      }
    }
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

console.log(naiveSort(list))
