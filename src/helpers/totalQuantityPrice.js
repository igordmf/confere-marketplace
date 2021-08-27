function totalQuantityPrice({ actual_price: price , discount_percentage: discount, quantity }) {
  if(!discount) {
    const priceValue = Number.parseFloat((price.replace('R$ ', '').replace(',', '.')));
    const total = priceValue * quantity;
    return new Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }).format(total);
  }
  const priceValue = Number.parseFloat((price.replace('R$ ', '').replace(',', '.')));
  const discountValue = Number.parseFloat((discount.replace('%', '').replace(',', '.')));
  const discountPrice = priceValue * (1 - (discountValue / 100));
  return new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }).format(discountPrice * quantity);
}

export default totalQuantityPrice;