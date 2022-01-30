function DNAStrand(dna) {
  return dna.split("").map((letter) => {
    if (letter === "A") {
      return "T";
    }
    if (letter === "T") {
      return "A";
    }
    if (letter === "C") {
      return "G";
    }
    if (letter === "G") {
      return "C";
    }
  })
    .join("")
}

function DNAStrand1(dna) {
  return dna.split("").map((letter) => {
    if (letter === "A") return "T";
    if (letter === "T") return "A";
    if (letter === "C") return "G";
    if (letter === "G") return "C";
  })
    .join("");
}

console.log(DNAStrand1("AAAA"))
console.log(DNAStrand1("ATTGC"))
console.log(DNAStrand1("GTAT"))
