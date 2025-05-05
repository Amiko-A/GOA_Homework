let cartItems = ["Stake", "Chicken", "Tea", "Bread", "Coca-cola"];
let prices = [10, 5, 3, 2, 1];

function addItem(item, price) {
  cartItems.unshift(item);
  prices.unshift(price);
  return {cartItems, prices};
}

function removeFirstItem() {
  cartItems.shift();
  prices.shift();
  return {cartItems, prices};
}

function replaceItem(index, newItem, newPrice) {
  cartItems.splice(index, 1, newItem);
  prices.splice(index, 1, newPrice);
  return { cartItems, prices };
}

function createReceipt() {
  return cartItems.join(",");
}

function applyDiscount(discountPrice) {
  prices.fill(discountPrice);
  return prices;
}
