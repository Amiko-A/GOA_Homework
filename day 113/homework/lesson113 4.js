let products = [
  { name: "Book", price: 15 },
  { name: "shoes", price: 145 },
  { name: "Pencil", price: 3 }
];

let hasAffordableProduct = products.some(product => product.price < 20);