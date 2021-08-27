import React from 'react';
import CartProduct from '../../atoms/CartProduct';
import TotalCart from '../../atoms/TotalCart';
import { Container, Content, ProductWrapper } from './styles';

function CartList({ products, homeRef }) {
  return (
    <Container>
      <Content>
        <ProductWrapper>
          {products.map((product) => (
            <CartProduct
              product={ product }
              key={ `${product.name}${product.code_color}` }
            />
          ))}
        </ProductWrapper>
        <TotalCart />
      </Content>
    </Container>
  )
}

export default CartList;
