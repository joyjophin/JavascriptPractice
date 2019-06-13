function divide(divident, divisor) {
  if (divisor === 0) {
    throw new Error("Division by 0");
  }

  let count = 0;
  while(divident > 0) {
    if (divisor > divident) {
      break;
    }

    divident -= divisor;
    count++
  }

  return count;
}

console.log(divide(7, 2))
console.log(divide(4, 2))
console.log(divide(2, 4))
console.log(divide(2, 0))
