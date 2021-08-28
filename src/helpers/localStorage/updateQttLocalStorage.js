function updateQttLocalStorage([product, action]) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const newCartItems = cartItems.map((item) => {
    if(item.name === product.name && item.chosenSize === product.chosenSize) {
      return {...item, quantity: action === 'decrease' ? (item.quantity - 1) : (item.quantity + 1)};
    }
    return item;
  })
  localStorage.setItem('cartItems', JSON.stringify(newCartItems));
}

export default updateQttLocalStorage;