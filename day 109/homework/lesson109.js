let person = {
  name: "Gio",
  age: 17,
  city: "Tbilisi"
};

for (let i in person) {
  console.log(`${i}: ${person[i]}`);
}
