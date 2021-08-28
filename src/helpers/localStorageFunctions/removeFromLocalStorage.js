function removeFromLocalStorage(product) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const newCartItems = cartItems.filter((item) => !(item.name === product.name && item.chosedSize === product.chosedSize));
  localStorage.setItem('cartItems', JSON.stringify(newCartItems));
}

export default removeFromLocalStorage;