function itemToLocalStorage({ product, chosenSize }) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  if(cartItems) {
    if(cartItems.some((item) => (item.name === product.name && item.chosenSize === chosenSize))){
      const newCartItems = cartItems.map((item) => {
        if(item.name === product.name && item.chosenSize === chosenSize) {
          return {...item, quantity: item.quantity + 1};
        }
        return item;
      });
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      return;
    }
    const newCartItems = [...cartItems, { ...product, chosenSize, quantity: 1 }];
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  } else {
    localStorage.setItem('cartItems', JSON.stringify([{ ...product, chosenSize, quantity: 1 }]));
  }
}

export default itemToLocalStorage;