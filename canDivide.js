function isDivideBy(number, a, b) {
  const valueA = number / a;
  const valueB = number / b;
  return (valueA === Math.floor(valueA)
          && valueB === Math.floor(valueB));
}

function isDivideBy1(number, a, b) {
  return (number % a === 0 && number % b === 0); 
}

function isDivideBy2(number, a, b) {
  return (number % a + number % b) === 0;
}

console.log(isDivideBy1(-12, 2, -6));
console.log(isDivideBy1(-12, 2, -5));
console.log(isDivideBy(45, 1, 6));
console.log(isDivideBy2(45, 5, 15));
