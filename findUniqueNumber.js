function findUniq(arr) {
  const numberMap = new Map();
  arr.forEach(val => {
    if (numberMap.has(val)) {
      numberMap.set(val, numberMap.get(val) + 1);
    } else {
      numberMap.set(val, 1);
    }
  })
  let number;
  numberMap.forEach((val, key) => {
    if (val === 1) {number = key};
  }) 
  
  return number;
}

function findUniq1(arr) {
  return arr.find(val => arr.indexOf(val) === arr.lastIndexOf(val));
}

console.log(findUniq([1,0,0]));
console.log(findUniq([0,1,0]));
console.log(findUniq([0,0,0,0.55]));
