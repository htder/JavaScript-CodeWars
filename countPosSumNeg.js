function countPositivesSumNegatives(input) {
  if (input === null) {
    return [];
  }
  const numbers = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 0) continue;
    if (input[i] > 0) {
      if (numbers.length === 0) {
        numbers[0] = 0;
        numbers[1] = 0;
      }
      numbers[0]++;
    } else {
      if (numbers.length === 0) {
        numbers[0] = 0;
        numbers[1] = 0;
      }
      numbers[1] += input[i];
    }
  }
  return numbers;
}

function countPosSumNeg(input) {
  if (input === null || input.length === 0) {
    return [];
  }
  let pos = 0;
  let neg = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      pos++;
    } else {
      neg += input[i];
    }
  }
  return [pos, neg];
}

console.log(countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));


