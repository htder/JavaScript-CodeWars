function howMuchILoveYou(nbPetals) {
  const results = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
  return results[(nbPetals - 1) % 6];
}

console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(8));
console.log(howMuchILoveYou(3));
console.log(howMuchILoveYou(6));
