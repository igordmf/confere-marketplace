import React from "react";
import Routes from './routes';
import Header from "./components/molecules/Header";
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes />
    </>
  );
}

export default App;
