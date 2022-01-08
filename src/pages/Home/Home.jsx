import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ACTIONS } from '../../redux/actions';
import ProductsList from '../../components/molecules/ProductsList';
import { Container } from './styles';
/* import { products } from '../../db.json'; */
import SearchBar from '../../components/molecules/SearchBar/SearchBar';

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.products);
  const filtredProducts = useSelector((state) => state.productsReducer.filtredProducts);
  const homeRef = useRef(null);

  useEffect(() => {
    dispatch(ACTIONS.fetchProducts());
  }, [dispatch])

  return (
    <Container ref={ homeRef } >
      <SearchBar />
      <ProductsList
        products={ products.length === filtredProducts.length ? products : filtredProducts }
        homeRef={ homeRef }
      />
    </Container>
  )
}

export default Home;