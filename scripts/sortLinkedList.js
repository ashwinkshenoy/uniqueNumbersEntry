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

function head(list) {
  let b = [];
  
  // Get the list without the head
  for(let i = 0; i < list.length; i++) {
    for(let j = 0; j < list.length; j++) {
      if(list[i].id === list[j].next) {
        b.push(list[i])
        break;
      }
    }
  }

  // Filter the list for head from b
  b = list.filter((i) => !b.includes(i))

  return b
}

function naiveSort(linkedList) {
  var sortedList = head(linkedList); // get head
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
