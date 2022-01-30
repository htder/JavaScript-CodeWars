function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U")
}

console.log(DNAtoRNA("TTTT"))
console.log(DNAtoRNA("GCAT"))
console.log(DNAtoRNA("GACCGCCGCC"))
