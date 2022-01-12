const maxSequence = function (arr) {
  //   if (arr.length === 0) return 0;
  let largest = 0;
  for (let i = 0; i < arr.length; i++) {
    const slicedArray = arr.slice(i, arr.length + 1);
    let total = 0;
    slicedArray.forEach((value) => {
      total += value;
      if (total > largest) largest = total;
    });
  }
  return largest;
};

console.log(maxSequence([]));
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]));
