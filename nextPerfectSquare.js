function findNextSquare(sq) {
  if (Math.sqrt(sq) !== Math.floor(Math.sqrt(sq))) {
    return -1;
  }

  let value = ++sq;
  while (Math.sqrt(value) !== Math.floor(Math.sqrt(value))) {
    value += 1;
  }
  return value;
}

function findNextSquare(sq) {
  let value = Math.sqrt(sq);
  if (Math.round(value) === value) {
    return Math.pow(++value, 2);
  }
  return -1;
}

console.log(findNextSquare(155));
console.log(findNextSquare(342786627));
console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(319225));
console.log(findNextSquare(15241383936));
