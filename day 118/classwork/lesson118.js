function sumNumbers(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}