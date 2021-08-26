function promotionPrice({ actual_price: price , discount_percentage: discount }) {
  if(!discount) {
    return price;
  }
  const priceValue = Number.parseFloat((price.replace('R$ ', '').replace(',', '.')));
  const discountValue = Number.parseFloat((discount.replace('%', '').replace(',', '.')));
  const discountPrice = priceValue * (1 - (discountValue / 100));
  return new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }).format(discountPrice);;
}

export default promotionPrice;