function nbYear(p0, percent, aug, p) {
  let years = 0;
  let population = p0;
  while (population < p) {
    population = population + (population * percent) / 100 + aug;
    years++;
  }
  return years;
}

function nbYear1(p0, percent, aug, p) {
  let years = 0;
  for (years; p0 < p; years++) {
    p0 = p0 + (p0 * percent) / 100 + aug;
  }
  return years;
}

console.log(nbYear1(1500, 5, 100, 5000));
console.log(nbYear1(1500000, 2.5, 10000, 2000000));
console.log(nbYear1(1500000, 0.25, 1000, 2000000));
