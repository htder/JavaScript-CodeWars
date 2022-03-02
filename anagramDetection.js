var isAnagram = function(test, original) {
  if (test.length !== original.length) return false;
  const testString = test.toLowerCase()
    .split("")
    .sort()
    .join("");
  const originalString = original.toLowerCase()
    .split("")
    .sort()
    .join("");
  return testString === originalString;
};

console.log(isAnagram("foefet", "toffee"));
console.log(isAnagram("Buckethead", "DeathCubeK"));
console.log(isAnagram("Twoo", "WooT"));

console.log(isAnagram("dumble", "bumble"));
console.log(isAnagram("ound", "round"));
console.log(isAnagram("apple", "pale"));
