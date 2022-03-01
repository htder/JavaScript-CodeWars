function findOdd(A) {
  const map = new Map();
  A.forEach(val => {
    const prev = map.get(val);
    prev ? map.set(val, prev + 1) : map.set(val, 1);
  });
  for (let [key, value] of map.entries()) {
    if (value % 2 !== 0) return key;
  }
}

// console.log(findOdd([7]));
console.log(findOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]));
// console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));
