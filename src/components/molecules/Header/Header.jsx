import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Content, StyledLink } from './styles';

function Header() {
  const { pathname } = useLocation();

  return (
    <Container>
      <Content>
        <div>
          <h1>Confere Marketplace</h1>
          <img src='https://www.conferecartoes.com.br/hubfs/confere-shop-logo.png' alt="Logo" />
        </div>
        <nav>
          <StyledLink $isCurrentPath={ pathname === '/' } to='/'>Home</StyledLink>
          <StyledLink $isCurrentPath={ pathname === '/cart' } to='/cart'>Carrinho</StyledLink>
        </nav>
      </Content>
    </Container>
  )
}

export default Header;