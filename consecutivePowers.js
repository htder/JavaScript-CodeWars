function sumDigPow(a, b) {
  const results = [];
  for (let i = a; i <= b; i++) {
    let total = 0;
    i.toString().split("")
      .map((stringValue, index) => {
        total += Math.pow(+stringValue, index + 1);
    })
    if (total === i) {
      results.push(i);
    }
  }
  return results;
}

console.log(sumDigPow(1, 10));
console.log(sumDigPow(1, 100));
console.log(sumDigPow(10, 100));
console.log(sumDigPow(90, 100));
console.log(sumDigPow(90, 150));
console.log(sumDigPow(50, 150));
console.log(sumDigPow(10, 150));
