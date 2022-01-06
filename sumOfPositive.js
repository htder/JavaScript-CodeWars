function positiveSum(arr) {
  return arr
    .filter((number) => number > 0)
    .reduce((total, currentNumber) => total + currentNumber, 0);
}
