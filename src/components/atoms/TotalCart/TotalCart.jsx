import React from 'react'
import { useSelector } from 'react-redux';
import { Container, TotalPrice } from './styles';
import totalValueAndQuantity from '../../../helpers/totalValueAndQuantity';

function TotalCart() {
  const cartItems = useSelector(state => state.cartReducer.cartItems);
  const { totalValue, totalQuantity } = totalValueAndQuantity(cartItems);

  return (
    <Container>
      <div>
        <span>Quantidade total: </span>
        <span>{totalQuantity} {totalQuantity > 1 ? 'items' : 'item'}</span>
      </div>
      <div>
        <span>Valor total: </span>
        <TotalPrice>{totalValue}</TotalPrice>
      </div>
      <button type="button">Checkout</button>
    </Container>
  )
}

export default TotalCart;