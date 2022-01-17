function encode(string) {
  const a = string.replace(/a/g, "1");
  const e = a.replace(/e/g, "2");
  const i = e.replace(/i/g, "3");
  const o = i.replace(/o/g, "4");
  const u = o.replace(/u/g, "5");
  return u;
}

function decode(string) {
  const one = string.replace(/1/g, "a");
  const two = one.replace(/2/g, "e");
  const three = two.replace(/3/g, "i");
  const four = three.replace(/4/g, "o");
  const five = four.replace(/5/g, "u");
  return five;
}

function encode1(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let stringBuilder = string;
  vowels.forEach((letter, index) => {
    stringBuilder = stringBuilder.replace(new RegExp(letter, "g"), index + 1);
  });
  return stringBuilder;
}

function decode1(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let stringBuilder = string;
  vowels.forEach((letter, index) => {
    stringBuilder = stringBuilder.replace(
      new RegExp(index + 1, "g"),
      vowels[index]
    );
  });
  return stringBuilder;
}

function encode2(string) {
  return string.replace(/[aeiou]/g, (x) => "_aeiou".indexOf(x));
}

function decode2(string) {
  return string.replace(/[1-5]/g, (x) => "_aeiou".charAt(x));
}

console.log(encode1("hello"));
console.log(encode2("How are you today?"));
console.log(encode("This is an encoding test"));
console.log(decode2("h2ll4"));
console.log(decode2("h3 th2r2"));
