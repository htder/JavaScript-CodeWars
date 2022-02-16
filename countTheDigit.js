function nbDig(n, d) {
  let count = 0;
  let regex = new RegExp(`[^${d}]`, "g");
  for (let i = 0; i <= n; i++) {
    count += ("" + (i*i)).replace(regex, "").length;
  }
  return count;
}

console.log(nbDig(10, 1));
console.log(nbDig(25, 1));
console.log(nbDig(5750, 0));
console.log(nbDig(11011, 2));;
