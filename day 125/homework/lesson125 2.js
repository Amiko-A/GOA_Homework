let numbers = new Set([1, 2, 3, 4, 5]);
console.log(numbers);

let fruits = new Set(["apple", "banana"]);
fruits.add("orange");
console.log(fruits);

fruits.add("apple");
console.log(fruits);

console.log(fruits.has("banana"));

fruits.delete("banana");
console.log(fruits);

let colors = new Set(["blue", "green", "purple"]);
for (let color of colors) {
  console.log(color);
}

let names = new Set(["Amiko", "Gio", "Nika"]);
let nameArray = [...names];
console.log(nameArray);

let array = [1, 2, 2, 3, 3, 4];
let array2 = [...new Set(array)];
console.log(array2);

let letters = ['a', 'b', 'a', 'c', 'b'];
let ul = new Set(letters);
console.log(ul.size);

let randomSet = new Set(["x", "y", "z"]);
someSet.clear();
console.log(someSet);
