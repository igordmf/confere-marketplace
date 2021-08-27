import React, { useState, useEffect, useMemo } from 'react';
import ProductCard from '../../atoms/ProductCard';
import { Container, Content, ProductWrapper } from './styles';

function ProductsList({ products, homeRef }) {
  const [page, setPage] = useState(1);
  const productsDisplayedNum = 9;
  const firstDisplayed = (page - 1) * productsDisplayedNum;
  const lastDisplayed = firstDisplayed + productsDisplayedNum;
  const productsDisplayed = useMemo(() => products
    .slice(firstDisplayed, lastDisplayed), [products, firstDisplayed, lastDisplayed]);

  useEffect(() => {
    homeRef.current.scrollIntoView();
  }, [page, homeRef])

  return (
    <Container>
      <Content>
        <ProductWrapper>
          {productsDisplayed.map((product) => (
            <ProductCard
              product={ product }
              key={ `${product.name}${product.code_color}` }
            />
          ))}
        </ProductWrapper>
        <div>
          <button onClick={ () => setPage((state) => state-1) } disabled={ page === 1 }>Anterior</button>
          <button
            onClick={ () => setPage((state) => state+1) }
            disabled={ page * productsDisplayedNum > products.length }
          >Próxima</button>
        </div>
      </Content>
    </Container>
  )
}

export default ProductsList;
