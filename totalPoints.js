function points(games) {
  let points = 0;
  games.forEach(game => {
    const [x, y] = game.split(":");
    if (x > y) points += 3;
    if (x === y) points++;
  })

  return points;
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));
