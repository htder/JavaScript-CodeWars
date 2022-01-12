function duplicateEncode(word) {
  const letters = word.toLowerCase().split("");
  const duplicates = new Map();

  letters.forEach((letter) => {
    let value = duplicates.get(letter);
    value ? duplicates.set(letter, (value += 1)) : duplicates.set(letter, 1);
  });

  let string = "";
  letters.forEach((letter) => {
    duplicates.get(letter) === 1 ? (string += "(") : (string += ")");
  });
  return string;
}

function duplicateEncode1(word) {
  word = word.toLowerCase();
  return word.replace(/./g, (letter) =>
    word.indexOf(letter) === word.lastIndexOf(letter) ? "(" : ")"
  );
}

console.log(duplicateEncode1("din"));
console.log(duplicateEncode1("recede"));
console.log(duplicateEncode1("Success"));
console.log(duplicateEncode1("(( @"));
