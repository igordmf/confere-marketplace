import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Content, StyledLink } from './styles';
import Logo from '../../../assets/images/confere-shop-logo.png'

const confereShopLogoStyle = {
  backgroundColor: "#f5f7f9",
  margin: "auto",
  transition: "background-color 300ms"
}

function Header() {
  const { pathname } = useLocation();

  return (
    <Container>
      <Content>
        <div>
          <h1>Confere Marketplace</h1>
          <img
            alt='Marketplace logo'
            style={ confereShopLogoStyle }
            src={ Logo }
          />
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