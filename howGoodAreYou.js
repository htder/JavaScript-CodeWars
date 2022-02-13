function betterThanAverage(classPoints, yourPoints) {
  const completeArray = [...classPoints, yourPoints];
  const average = completeArray.reduce((a,b) => a + b, 0) / completeArray.length; 
  return yourPoints > average;
}

console.log(betterThanAverage([2,3], 5));
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69));
