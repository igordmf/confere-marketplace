import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import Routes from './routes';
import Header from "./components/molecules/Header";
import GlobalStyle from './styles/global';
import { localStorageCartItems } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if(cartItems) {
      dispatch(localStorageCartItems(cartItems));
    }
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes />
    </>
  );
}

export default App;
