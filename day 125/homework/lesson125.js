let set = new Set();

set.add(1);
set.add(2);
set.add(3);

console.log(set.has(2));
console.log(set.has(5));

console.log(set.size);

set.delete(2);
console.log(set.has(2));

set.clear();
console.log(set.size);

let numbers = new Set([10, 20, 30]);
numbers.forEach(value => {
  console.log(value);
});

let array = [...numberSet];
console.log(array);

let set1 = new Set([1, 2, 3]);
let set2 = new Set([3, 4, 5]);
