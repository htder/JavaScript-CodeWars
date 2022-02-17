function wave(string) {
  const waveWord = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") continue;
    waveWord.push(string.slice(0, i) + string[i].toUpperCase() + string.slice(i + 1));
  }
  return waveWord;
}

console.log(wave("hello world"));
