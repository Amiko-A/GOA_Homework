let prices = {
  book: 25,
  pen: 5,
  pencil: 3
};

let total = 0;

for (let i in prices) {
  total += prices[i];
}