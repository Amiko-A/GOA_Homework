let name1 = String(prompt("Enter first person's name:"));
let name2 = String(prompt("Enter second person's name:"));
let name3 = String(prompt("Enter third person's name:"));

let names = [name1, name2, name3];

let whoPays = names[Math.floor(Math.random() * names.length)];

console.log(`${whoPays} pays for food `);