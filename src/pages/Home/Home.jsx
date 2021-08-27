import React, { useRef } from 'react';
import ProductsList from '../../components/molecules/ProductsList';
import { Container } from './styles';
import { products } from '../../db.json';
import SearchBar from '../../components/molecules/SearchBar/SearchBar';

function Home() {
  const homeRef = useRef(null);
  console.log(products);

  return (
    <Container ref={ homeRef } >
      <SearchBar />
      <ProductsList products={ products } homeRef={ homeRef } />
    </Container>
  )
}

export default Home;