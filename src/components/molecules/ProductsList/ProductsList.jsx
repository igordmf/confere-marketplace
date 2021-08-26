import React from 'react';
import ProductCard from '../../atoms/ProductCard';
import { Container, Content } from './styles';

function ProductsList(props) {
  const { products } = props;

  return (
    <Container>
      <Content>
        {products.map((product) => (
          <ProductCard
            product={ product }
            key={ `${product.name}${product.code_color}` }
          />
        ))}
      </Content>
    </Container>
  )
}

export default ProductsList;
