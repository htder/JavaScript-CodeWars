function calculateYears(principal, interest, tax, desired) {
  let total = principal;
  let years = 0;

  while (total < desired) {
    total += (total * interest) - ((total * interest)* tax);
    years++;
  }
  return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));
console.log(calculateYears(1000, 0.01625, 0.18, 1200));
console.log(calculateYears(1000, 0.05, 0.18, 1000));
