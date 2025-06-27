let customerOrders = [
  {
    orderId: 111,
    isDelivered: true,
    items: [
      { name: "book 1", price: 12, quantity: 1 },
      { name: "book 2", price: 15, quantity: 2 }
    ]
  },
  {
    orderId: 222,
    isDelivered: false,
    items: []
  },
  {
    orderId: 333,
    isDelivered: true,
    items: [
      { name: "book 3", price: 9, quantity: 2 },
      { name: "book 4", price: 25, quantity: 1 }
    ]
  }
];

let allOrdersHaveItems = customerOrders.every(order => order.items.length > 0);
console.log("All orders have items:", allOrdersHaveItems);

let hasPendingDelivery = customerOrders.some(order => order.isDelivered === false);
console.log("Has pending delivery:", hasPendingDelivery);

customerOrders.forEach(order => {
  console.log(`Processing Order ID: ${order.orderId}`);

  let onlyExpensive = order.items.every(item => item.price > 10);
  console.log(`Order ${order.orderId} contains only expensive books: ${onlyExpensive}`);

  let hasMultiples = order.items.some(item => item.quantity > 1);
  console.log(`Order ${order.orderId} has multiple copies of at least one book: ${hasMultiples}`);
});
