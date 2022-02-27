function correct(string) {
  const stringS = string.replace(/5/g, "S");
  const stringO = stringS.replace(/0/g, "O");
  return stringO.replace(/1/g, "I");
}
