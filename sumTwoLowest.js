function sumTwoSmallestNumbers(numbers) {
  const sortedValues = numbers.sort((x, y) => x - y);
  return sortedValues[0] + sortedValues[1];
}

function sumTwoSmallestNumbers1(numbers) {
  const [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}

function sumTwoSmallestNumbers2(numbers) {
  return numbers
    .sort((x, y) => x - y)
    .slice(0, 2)
    .reduce((x, y) => x + y);
}

console.log(sumTwoSmallestNumbers2([19, 5, 42, 2, 77]));
