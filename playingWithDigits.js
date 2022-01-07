function digPow(n, p) {
  let total = Array.from(String(n), (num) => Number(num))
    .map((value, index) => Math.pow(value, p + index))
    .reduce((tot, cur) => tot + cur);
  return total % n === 0 ? total / n : -1;
}

console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(46288, 3));
