const countries = new Map();
countries.set("France", "Paris");
countries.set("Germany", "Berlin");
countries.set("Russia", "Moscow");
countries.set("Gorgia", "Tbilisi");
countries.set("Japan", "Tokyo");

countries.forEach((capital, country) => {
  console.log(`${country} : ${capital}`);
});

const fruits = new Map([
  ["Apple", "Red"],
  ["Banana", "Yellow"],
  ["Grapes", "Green"]
]);

fruits.set("Orange", "Orange");
fruits.set("Kiwi", "Brown");
fruits.delete("Banana");

fruits.forEach((color, fruit) => {
  console.log(`${fruit} is ${color}`);
});

if (fruits.has("Apple")) {
  console.log("Yes");
} else {
  console.log("No");
}

if (fruits.has("Mango")) {
  console.log("Yes");
} else {
  console.log("No");
}

countries.forEach((capital, country) => {
  console.log(`The capital of ${country} is ${capital}`);
});
