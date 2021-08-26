import React from 'react';
import { Container, NoDiscountPrice, Discount, FinalPrice } from './styles';
import promotionPrice from '../../../helpers/promotionPrice';

function ProductCard({ product }) {
  return (
    <Container>
      <div>
        <img src={ product.image } alt={ product.name } />
      </div>
      <span>{ product.name }</span>
      <div>
        {product.discount_percentage && (
          <>
            <NoDiscountPrice>{ product.actual_price }</NoDiscountPrice>
            <Discount>{ product.discount_percentage }</Discount>
          </>
        )}
        <FinalPrice>{ promotionPrice(product) }</FinalPrice>
      </div>
    </Container>
  )
}

export default ProductCard;

/* text-decoration: line-through; */

/* Imagem
Nome
Preço
Estado de promoção
Preço de promoção (se disponivel)
Tamanhos disponíveis
Marca de promoção */