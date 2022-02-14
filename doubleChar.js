function doubleChar(str) {
  return str.split("")
    .map(letter => letter.repeat(2))
    .join("");
}

console.log(doubleChar("String"));
console.log(doubleChar("abcd"));
console.log(doubleChar("1337"));
