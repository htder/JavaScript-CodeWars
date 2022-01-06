function isValidWalk(walk) {
  if (!(walk.length === 10)) {
    return false;
  }
  const location = new Map([
    ["n", 0],
    ["s", 0],
    ["w", 0],
    ["e", 0],
  ]);
  walk.forEach((direction) => {
    location.set(direction, location.get(direction) + 1);
  });

  return (
    location.get("n") === location.get("s") &&
    location.get("w") === location.get("e")
  );
}

function isValidWalk2(walk) {
  if (walk.length !== 10) return false;

  const location = { n: 0, w: 0, s: 0, e: 0 };
  walk.forEach((direction) => location[direction]++);

  return location.n === location.s && location.w === location.e;
}
