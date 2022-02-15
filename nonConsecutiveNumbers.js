function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) continue;
    if (arr[i] !== arr[i - 1] + 1) return arr[i];
  }
  return null;
}
