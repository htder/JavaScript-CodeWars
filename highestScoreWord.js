function high(x) {
  let winningWord;
  let score = 0;
  x.toLowerCase()
    .split(" ")
    .forEach(word => {
      const letters = word.split("");
      let total = 0;
      word.split("")
        .forEach(letter => {
          total += parseInt(letter, 36) - 9; 
        })
      if (total > score) {
        winningWord = word;
        score = total;
      }
  })
  return winningWord;
}

console.log(high('man i need a taxi up to ubud'));
console.log(high('what time are we climbing up the volcano'));
console.log(high('take me to semynak'));
console.log(high('aa b'));
console.log(high('b aa'));
console.log(high('bb d'));
console.log(high('d bb'));
console.log(high('aaa b'));
