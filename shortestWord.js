function findShort(s) {
  return s.split(" ").sort((a, b) => a.length - b.length)[0].length;
}

function findShort1(s) {
  return Math.min(...s.split(" ").map((word) => word.length));
}

console.log(findShort1("bitcoin take over the world maybe who knows perhaps"));
console.log(
  findShort1(
    "turns out random test cases are easier than writing out basic ones"
  )
);
console.log(findShort1("Let's travel abroad shall we"));
