function totalValueAndQuantity(cartItems) {

  function totalQuantityPrice({ actual_price: price , discount_percentage: discount, quantity }) {
    if(!discount) {
      const priceValue = Number.parseFloat((price.replace('R$ ', '').replace(',', '.')));
      const total = priceValue * quantity;
      return total;
    }
    const priceValue = Number.parseFloat((price.replace('R$ ', '').replace(',', '.')));
    const discountValue = Number.parseFloat((discount.replace('%', '').replace(',', '.')));
    const discountPrice = priceValue * (1 - (discountValue / 100));
    return (discountPrice * quantity);
  }
  
  const totalValue = new Intl.NumberFormat('pt-BR',
  { style: 'currency', currency: 'BRL' }).format(cartItems.reduce((acc, cv) => acc + totalQuantityPrice(cv), 0));

  const totalQuantity = cartItems.reduce((acc, cv) => acc + Number.parseInt(cv.quantity),0);
  return { totalValue, totalQuantity };
}

export default totalValueAndQuantity;