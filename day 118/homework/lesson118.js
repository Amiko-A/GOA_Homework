function filterAndSum(threshold, ...numbers) {
  let filtered = numbers.filter(num => num > threshold);
  let sum = filtered.reduce((acc, acc2) => acc + acc2, 0);
  return sum;
}