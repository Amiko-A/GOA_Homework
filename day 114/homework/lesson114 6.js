let order = [
    {
        orederID : 1,
        customID : 111,
        items : [
            {
                title:"book A", price : 10 , quantity:1,
            }
        ],
        shipingAdresse:"123 oliver street",
        isDelivered:true,
    },
    {
        orederID : 2,
        customID : 222,
        items : [
            {
                title:"book B", price : 20 , quantity:2,
            }
        ],
        shipingAdresse:"58 Ilia street",
        isDelivered:true,
    },
    {
        orederID : 3,
        customID : 333,
        items : [
            {
                title:"book C", price : 30 , quantity:3,
            }
        ],
        shipingAdresse:"123 fight street",
        isDelivered:false,
    },
]

let allOrdersHaveItems = order.every(order => items.length > 0);

let hasPendingDelivery = order.some(order => order.is === false);

let costumerOrder = order.forEach(item=>[
    console.log(`Processing Order ID: ${order.orderId}`)
]);

let costumerOrder2 =order.items.forEach(item => {
    console.log(`${item.title} (Quantity: ${item.quantity})`);
});

let allExpensive = order.items.every(item => item.price > 10);
console.log(`Order ${order.orderId} contains only expensive books: ${allExpensive}`);

 let hasMultiples = order.items.some(item => item.quantity > 1);
  console.log(`Order ${order.orderId} has multiple copies of at least one book: ${hasMultiples}`);