function findNb(m) {
  let n = 0;
  while (m > 0) {
    m -= (++n) ** 3;
  }
  return m ? -1 : n;
}

function findNb1(m) {
  let n = 0;
  let total = 0;
  while (sum < m) {
    n++;
    total += Math.pow(n, 3);
  }
  return total === m ? n : -1;
}
