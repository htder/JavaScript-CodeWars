function printerError(s) {
  let count = 0;
  s.split("").forEach(letter => {
    if (!(letter.match(/[abcdefghijklm]/g))) {
      count += 1;
    }
  })
  return `${count}/${s.length}`
}

function printerError1(s) {
  let count = 0;
  s.split("").forEach(letter => {
    if (letter > "m") {
      count += 1;
    }
  })
  return `${count}/${s.length}`;
}

console.log(printerError1("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))
