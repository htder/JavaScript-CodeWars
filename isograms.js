function isogram(word) {
  const letters = [];

  for (let i = 0; i < word.length; i++) {
    const currentLetter = word[i].toLowerCase();
    if (!letters.includes(currentLetter)) {
      letters.push(currentLetter);
    }
  }
  return letters.length === word.length;
}

function isogram2(word) {
  return new Set(word.toLowerCase()).size == word.length;
}
