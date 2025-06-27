const car = {
  brand: "Porche",
  model: "918 Spyder",
  color: "gray"
};

for (let i in car) {
  console.log(`${i}: ${car[i]}`);
}