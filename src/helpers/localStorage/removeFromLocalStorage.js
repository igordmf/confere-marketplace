function removeFromLocalStorage(product) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const newCartItems = cartItems.filter((item) => !(item.name === product.name && item.chosenSize === product.chosenSize));
  localStorage.setItem('cartItems', JSON.stringify(newCartItems));
}

export default removeFromLocalStorage;