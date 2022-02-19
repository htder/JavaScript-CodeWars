function count(string) {
  const letterCount = {};
  string.split("").forEach(letter => {
    !letterCount[letter] ? letterCount[letter] = 1 : letterCount[letter] += 1;
  })
  return letterCount;
}

console.log(count("abbccc"));
