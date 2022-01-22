function XO(str) {
  const xCount = !str.match(new RegExp(/x/gi))
    ? 0
    : str.match(new RegExp(/x/gi)).length;
  const oCount = !str.match(new RegExp(/o/gi))
    ? 0
    : str.match(new RegExp(/o/gi)).length;
  return xCount === oCount;
}

function XO(str) {
  const xCount = str.match(new RegExp(/x/gi));
  const oCount = str.match(new RegExp(/o/gi));
  return (xCount && xCount.length) === (oCount && oCount.length);
}

console.log(XO("xo"));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("ooom"));
