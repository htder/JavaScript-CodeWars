function SeriesSum(n) {
  if (n === 0) return "0.00";
  if (n === 1) return "1.00";
  let total = 1;
  let count = 4;
  for (let i = 1; i < n; i++) {
    total += (1 / count); 
    count += 3;
  }
  return "" + total.toFixed(2);
}

console.log(SeriesSum(0));
console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(3));
console.log(SeriesSum(4));

