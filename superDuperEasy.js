function problem(x) {
  if (typeof x === "string") return "Error";
  return (x * 50) + 6;
}

function problem1(x) {
  return typeof x === 'string' ? "Error" : x * 50 + 6;
}
