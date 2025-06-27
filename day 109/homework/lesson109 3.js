let person = {
  name: "Amiko",
  age: 15,
  active: true,
  score: 70,
  city: "Gori"
};

for (let i in person) {
  if (typeof person[i] === "number") {
    console.log(`${i}: ${person[i]}`);
  }
}