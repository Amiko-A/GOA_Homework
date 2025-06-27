let users = [
  { name: "Amiko", age: 15 },
  { name: "Nika", age: 19 },
  { name: "Dato", age: 37 }
];

let allAdults = users.every(user => user.age >= 18);