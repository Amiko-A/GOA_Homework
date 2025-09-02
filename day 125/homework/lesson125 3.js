let emptySet = new Set();
console.log(emptySet);

let animals = new Set();
animals.add("cat");
animals.add("dog");
animals.add("parrot");
console.log(animals);

console.log(animals.has("dog"));

animals.delete("parrot");
console.log(animals);

console.log(animals.size);

let numberSet = new Set([10, 20, 30, 40]);
for (let num of numberSet) {
  console.log(num);
}

animals.clear();
console.log(animals);

let array = [1, 2, 2, 3, 4, 4];
let set1 = new Set(array);
console.log(set1);

let afs = [...set1];
console.log(afs);