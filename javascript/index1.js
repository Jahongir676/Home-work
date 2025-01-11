
function decimalToBinary(decimal) {
  if (decimal === 0) {
    return '0';
  }
  
  let binary = '';
  let num = Math.abs(decimal);
  
  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  
  return decimal < 0 ? '-' + binary : binary;
}

console.log(decimalToBinary(10));
console.log(decimalToBinary(-15));
console.log(decimalToBinary(0));

