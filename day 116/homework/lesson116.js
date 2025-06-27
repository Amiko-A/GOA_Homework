//1
let name = "Amiko";

let age = 15;

let person = {name,age};

//2

let x = 10;

let y = 20;

let calculator = {
  x,
  y,
  plus() {
    return this.x + this.y;
  }
};

//3

function Book(title, author) {
  return {
    title,
    author
  };
}

let book = Book("Harry Potter", "j.k");

//4

let sc = "score";

let player = {
  name: "Nika",
  [sc]: 52
};

//5

let car = {
  brand: "Toyota",
  startingCar() {
    console.log("Car started");
  }
};