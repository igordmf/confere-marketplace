import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import CartList from '../../components/molecules/CartList';

function Cart() {
  const homeRef = useRef(null);
  const cartItens = useSelector((state) => state.cartReducer.cartItens);

  return (
    <Container ref={ homeRef } >
      <CartList products={ cartItens } homeRef={ homeRef } />
    </Container>
  )
}

export default Cart;
