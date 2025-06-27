let products = [
  { name: "Book", price: 35 },
  { name: "Pen", price: 5 },
  { name: "pencil", price: 3 }
];

let canAfford = products.some(product => product.price < 20)