import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Container, StyledSpan } from './styles';
import CartList from '../../components/molecules/CartList';

function Cart() {
  const homeRef = useRef(null);
  const cartItens = useSelector((state) => state.cartReducer.cartItens);
  console.log(cartItens);

  return (
    <Container ref={ homeRef } >
      {cartItens.length === 0
        ?
        <div className="no-itens">
          <StyledSpan>Nenhum produto no carrinho</StyledSpan>
        </div>
        :
        <CartList products={ cartItens } homeRef={ homeRef } />
      }
    </Container>
  )
}

export default Cart;
