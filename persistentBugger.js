function persistence(num) {
  let count = 0;
  let number = num;
  while (number.toString().length > 1) {
    let value = 1;
    number.toString().split("").forEach(val => {
      value *= val;
    })
    number = value;
    count++;
  }
  return count;
}

console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(999));
