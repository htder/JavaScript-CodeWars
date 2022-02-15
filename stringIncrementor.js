function incrementString(string) {
  let number = string.replace(/[A-Za-z]/g, "");
  console.log(string.split(/(\d+)/g))
  let newNumber = "" + (+number + 1);
  for (let i = newNumber.length; i < number.length; i++) {
    newNumber = "0" + newNumber;
  }
  const splitArr = string.split(/(\d+)/)
  return splitArr[0] + newNumber;
  // const num = string.replace(/[^d.]/g, "");
  // return num;
  // const splitArr = string.split(/(\d+)/)
  // if (splitArr.length === 3) {
  //   return splitArr[0] + (+splitArr[1]++);
  // }
}

console.log(incrementString("foobar000"));
console.log(incrementString("foo"));
console.log(incrementString("foobar001"));
console.log(incrementString("foobar099"));
console.log(incrementString("foobar99"));
console.log(incrementString(""));
