import React from 'react';
import ProductsList from '../../components/molecules/ProductsList';
import { Container } from './styles';
import { products } from '../../db.json';

function Home() {
  console.log(products);

  return (
    <Container>
      <ProductsList products={ products }/>
    </Container>
  )
}

export default Home;