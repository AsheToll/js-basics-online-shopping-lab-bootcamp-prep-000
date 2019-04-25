var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // Object.assign({}, cart, { [itemName]: item }, { [itemPrice]: Math.floor(Math.random() * 100 + 1) });
 // add items to cart
 // cart[itemName] = item
 cart = [...cart, item];
 // turns items into JavaScript objects before adding to cart
 // properly structures cart item as object with key of 'itemName', & corresponding value
 //sets price (between 1 & 100) on cart object using the key 'price'
 // chooses the price at random
 // returns message indicating item has been added
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
