import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Container, StyledSpan } from './styles';
import CartList from '../../components/molecules/CartList';

function Cart() {
  const homeRef = useRef(null);
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  console.log(cartItems);

  return (
    <Container ref={ homeRef } >
      {cartItems.length === 0
        ?
        <div className="no-itens">
          <StyledSpan>Nenhum produto no carrinho</StyledSpan>
        </div>
        :
        <CartList products={ cartItems } homeRef={ homeRef } />
      }
    </Container>
  )
}

export default Cart;
