export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [];
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

//Add to cart function
export function addToCart(productId) {
  let matchingItem;

    //1. check if the product is already in the cart.
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  //1.

  //if it is in the cart, increase the quantity
    if (matchingItem) {
      matchingItem.quantity += 1;
    }

  //If it's not in the cart, add it to the cart
    else {
      cart.push({
        productId: productId,
        quantity: 1
      });
    }

  saveToStorage();
}

//loop on how to delete product link datas
export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  })
  cart = newCart;
  saveToStorage();
}