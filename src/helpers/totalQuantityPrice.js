function totalQuantityPrice({ actual_price: price , quantity }) {
  const priceValue = Number.parseFloat((price.replace('R$ ', '').replace(',', '.')));
  const total = priceValue * quantity;
  return new Intl.NumberFormat('pt-BR',
  { style: 'currency', currency: 'BRL' }).format(total);
}

export default totalQuantityPrice;