function rot13(message) {
  return message.split("").map(letter => {
    if (!(letter.match(/[A-Za-z]/g))) {
      return letter;
    }
    let value;
    if (letter.match(/[A-Z]/g)) {
      value = (letter.charCodeAt(0) + 13) > 90 ? (letter.charCodeAt(0) + 13) - 26 : (letter.charCodeAt(0) + 13);
    }
    if (letter.match(/[a-z]/g)) {
      value = (letter.charCodeAt(0) + 13) > 122 ? (letter.charCodeAt(0) + 13) - 26 : (letter.charCodeAt(0) + 13);
    }
    return String.fromCharCode(value);
  }).join("");
}

console.log(rot13("Test"));
console.log(rot13("test"));
