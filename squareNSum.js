function squareSum(numbers) {
  return numbers
    .map((number) => number * number)
    .reduce((total, currentNumber) => total + currentNumber, 0);
}

function squareSum2(numbers) {
  return numbers.reduce(
    (total, currentNumber) => total + currentNumber * currentNumber,
    0
  );
}
