function addToLocalStorage({ product, chosedSize }) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  if(cartItems) {
    if(cartItems.some((item) => (item.name === product.name && item.chosedSize === chosedSize))){
      const newCartItems = cartItems.map((item) => {
        if(item.name === product.name && item.chosedSize === chosedSize) {
          return {...item, quantity: item.quantity + 1};
        }
        return item;
      });
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      return;
    }
    const newCartItems = [...cartItems, { ...product, chosedSize, quantity: 1 }];
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  } else {
    localStorage.setItem('cartItems', JSON.stringify([{ ...product, chosedSize, quantity: 1 }]));
  }
}

export default addToLocalStorage;