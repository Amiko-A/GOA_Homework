let sum = (arr = [1, 2, 3]) => arr.reduce((acc, val) => acc + val, 0);

console.log(sum([4, 5, 6]));
console.log(sum());
console.log(sum([]));
