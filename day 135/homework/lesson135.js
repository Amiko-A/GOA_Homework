function squareDigits(num) {
  let result = num
    .toString()
    .split('')
    .map(digit => Math.pow(Number(digit), 2))
    .join('');
  
  return Number(result);
}