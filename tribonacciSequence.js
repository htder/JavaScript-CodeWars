function tribonacci(signature, n) {
  const tribArr = [...signature];  
  
  let num0 = signature[0];
  let num1 = signature[1];
  let num2 = signature[2];
  let sum;

  for (let i = 0; i < n - 3; i++) {
    sum = num0 + num1 + num2;
    num0 = num1;
    num1 = num2;
    num2 = sum;
    tribArr.push(sum);
  }
  return tribArr.slice(0, n);
}

function tribonacci1(signature, n) {
  for (let i = 0; i < n - 3; i++) {
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
  }
  return signature.slice(0, n);
}

console.log(tribonacci1([1,1,1], 10));
console.log(tribonacci([0,0,1], 10));
console.log(tribonacci([1,1,1], 1));
console.log(tribonacci([1,1,1], 0));
