function incrementString(string) {
  let number = string.replace(/[A-Za-z]/g, "");
  let newNumber = "" + (+number + 1);
  for (let i = newNumber.length; i < number.length; i++) {
    newNumber = "0" + newNumber;
  }
  const splitArr = string.split(/(\d+)/)
  return splitArr[0] + newNumber;
}

console.log(incrementString("foobar000"));
console.log(incrementString("foo"));
console.log(incrementString("foobar001"));
console.log(incrementString("foobar099"));
console.log(incrementString("foobar99"));
console.log(incrementString(""));
