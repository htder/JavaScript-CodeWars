function duplicateCount(text) {
  const letters = new Map();
  
  text.toLowerCase()
    .split("")
    .forEach(letter => {
      letters.has(letter) 
        ? letters.set(letter, 1 + letters.get(letter)) 
        : letters.set(letter, 1);
  })

  let count = 0;
  letters.forEach((value, key) => {
    if (value > 1) count++;
  })

  return count;
}

console.log(duplicateCount(""));
console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("Indivisibilities"));
