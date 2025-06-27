 let person = [
  { name: "Jason", age: 35 },
  { name: "Bob", age: 58 },
  { name: "Charls", age: 15  }
];

let adults = person.every(person => person.age >= 18);