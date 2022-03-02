function titleCase(title, minorWords) {
  let minorArr = [];
  if (minorWords) {
   minorArr = minorWords.toLowerCase().split(" ");
  }
  return title.split(" ")
    .map((word, index) => {
      if (index === 0) return upperWord(word)
      else if (!minorArr.includes(word.toLowerCase())) {
        return upperWord(word)
      } else {
        return word.toLowerCase();
      }
    })
    .join(" ");
}

function upperWord(word) {
  return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
}

console.log(titleCase(""));
console.log(titleCase('a clash of KINGS', 'a an the of'));
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
console.log(titleCase('the quick brown fox'));
