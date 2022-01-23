function century(year) {
  return year % 100 === 0 ? Math.floor(year / 100) : Math.floor(year / 100) + 1;
}

console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));
console.log(century(89));
