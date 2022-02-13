function accum(s) {
  const words = [];
  s.split("").forEach((letter, index) => {
    words.push(letter.toUpperCase() + letter.toLowerCase().repeat(index))
  })
  return words.join("-");
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
