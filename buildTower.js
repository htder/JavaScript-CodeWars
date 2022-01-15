function towerBuilder(nFloors) {
  if (nFloors === 0) return [];
  if (nFloors === 1) return ["*"];
  const array = [`${" ".repeat(nFloors - 1)}*${" ".repeat(nFloors - 1)}`];

  for (let i = 2; i <= nFloors; i++) {
    const previousArray = array[array.length - 1].trim();

    array.push(
      `${" ".repeat(nFloors - i)}${previousArray + "**"}${" ".repeat(
        nFloors - i
      )}`
    );
  }
  return array;
}

function towerBuilder1(nFloors) {
  const array = [];
  for (let i = 0; i < nFloors; i++) {
    array.push(
      " ".repeat(nFloors - i - 1) +
        "*".repeat(i * 2 + 1) +
        " ".repeat(nFloors - i - 1)
    );
  }
  return array;
}

console.log(towerBuilder1(0));
console.log(towerBuilder1(1));
console.log(towerBuilder1(2));
console.log(towerBuilder1(3));
console.log(towerBuilder1(7));
