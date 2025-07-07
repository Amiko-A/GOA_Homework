class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log("Woof!");
  }
}

const myDog = new Dog("Buddy");

myDog.bark();

console.log(myDog.name);

myDog.bark();

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    console.log(`This is ${this.year} ${this.make} ${this.model}.`);
  }
}

let car1 = new Car("Porche", "918 spyder", 2013);
let car2 = new Car("lamborghini", "aventador", 2011);