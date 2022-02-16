function solution(string) {
  const words = [];
  let previousStart = 0;
  string.split("").forEach((letter, i) => {
    if (letter.match(/[A-Z]/g)) {
      words.push(string.slice(previousStart, i));
      previousStart = i;
    }
  });
  words.push(string.slice(previousStart));
  return words.join(" ");
}

console.log(solution("camelCasing"));
console.log(solution("CamelCasingTest"));
