function rps(p1, p2) {
  if (p1 === "rock") {
    if (p2 === "scissors") return "Player 1 won!";
    if (p2 === "paper") return "Player 2 won!";
    else return "Draw!";
  }
  if (p1 === "scissors") {
    if (p2 === "rock") return "Player 2 won!";
    if (p2 === "paper") return "Player 1 won!"
    else return "Draw!";
  }
  if (p1 === "paper") {
    if (p2 === "rock") return "Player 1 won!";
    if (p2 === "scissors") return "Player 2 won!"
    else return "Draw!";
  }
}

console.log(rps("rock", "paper"));
console.log(rps("scissors", "paper"));
console.log(rps("paper", "paper"));