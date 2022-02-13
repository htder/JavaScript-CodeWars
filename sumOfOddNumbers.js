function rowSumOddNumbers(n) {
  let start = Math.pow(n, 2) - (n - 1);
  let total = start;
  for (let i = 1; i < n; i++) {
    total += (start += 2);
  }
  return total;
}

// Get better at Math
function rowSumOddNumbers1(n) {
  return Math.pow(n, 3); 
}

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(42));
console.log(rowSumOddNumbers1(3));
