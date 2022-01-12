function isTriangle(a, b, c) {
  return a + b > c ? (a + c > b ? b + c > a : false) : false;
}

function isTriangle1(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

console.log(isTriangle1(1, 2, 2));
console.log(isTriangle1(7, 2, 2));
