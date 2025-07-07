//1
let  getFullName = (firstName, lastName) =>  firstName + " " + lastName;

//2
let returningSquare = num => num * num;

//3
let  numbers = [1, 2, 3, 4, 5];

let [firstNumber , , , , lastNumber] = numbers

//4
let student = { name: 'Emma', age: 20 };

let {name:studentName , age:studentAge} = student;

//5
product = {
  id: 101,
  details: {
    name: "Laptop",
    price: 1200
  }
}

let {name:productName ,price:productPrice} = product;

//6
let car = { make: 'Toyota', model: 'Camry', year: 2020 };

for (let i in car) {
  console.log(`${i} ${car[i]}`);
}

//7
let colors = ['red', 'green', 'blue'];

for (let x in color) {
  console.log(colors);
}

// 8
let txt = "JavaScript";

for (let y of txt) {
  console.log(y);
}

//9
function multiply(a, b = 2) {
  return a * b;
}

//10
function greeting(name = "Amiko") {
  console.log(`Hello, ${name}`);
}