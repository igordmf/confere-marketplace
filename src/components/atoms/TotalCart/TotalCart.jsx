import React from 'react'
import { Container, TotalPrice } from './styles';

function TotalCart() {
  return (
    <Container>
      <div>
        <span>Valor total</span>
        <TotalPrice>10</TotalPrice>
      </div>
      <div>
        <span>Quantidade total</span>
        <span>20 items</span>
      </div>
      <button type="button">Checkout</button>
    </Container>
  )
}

export default TotalCart;