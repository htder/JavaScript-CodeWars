// function alphabetPosition(text) {
  // original solution
  // const lowerLetterArray = text.toLowerCase()
  //   .split("")
  //   .filter(letter => (/[a-z]/g).test(letter));
  // return lowerLetterArray
  //   .map(letter => (parseInt(letter, 36) - 9))
  //   .join(" ");
  
  // condensed solution
function alphabetPosition(text) {
  return text.toLowerCase()
    .split("")
    .filter(value => (/[a-z]/g).test(value))
    .map(letter => (parseInt(letter, 36) - 9))
    .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))
console.log(alphabetPosition("The narwhal bacons at midnight."))
