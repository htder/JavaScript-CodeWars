function queueTime(customers, n) {
  const queues = [];
  for (let i = 0; i < n; i++) {
    queues.push(new Queue());
  }

  customers.forEach(customer => {
      const smallestQueue = getShortest( queues);
      queues[smallestQueue].enqueue(customer);
    })

  let longestQueue = 0;
  for (let i = 0; i < queues.length; i++) {
    if (queues[i].isEmpty()) continue;
    if (queues[i].totalTime() > longestQueue) {
      longestQueue = queues[i].totalTime();
    }
  }
  return longestQueue;
} 
   

function getShortest(queues) {
  let position;
  let time;
  for (let i = 0; i < queues.length; i++) {
    if (queues[i].isEmpty()) {
      position = i;
      break;
    }
    if (i === 0) {
      position = 0;
      time = queues[0].totalTime();
    }
    if (time >= queues[i].totalTime()) {
      position = i; 
      time = queues[i].totalTime();
    }
  }
  return position;
}

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  totalTime() {
   return this.items.reduce((prev, next) => prev + next,0);
  }
}

console.log(queueTime([],0));
console.log(queueTime([1,2,3,4], 1));
console.log(queueTime([2,2,3,3,4,4], 2));
console.log(queueTime([1,2,3,4,5], 100));
console.log(queueTime([23,12,37,43,37,49,12,27,26,48,11,42,44,3,35,42,32,6,17,29,29,45,1,37,21,31,33,37,5], 6)) // should be 151
console.log(queueTime([33,38,30,25,9,9,35,46,8,45,34,26,40,6], 3)); // should be 148
console.log(queueTime([5,3,4], 1));
console.log(queueTime([10,2,3,3], 2));
console.log(queueTime([2,3,10], 2));
