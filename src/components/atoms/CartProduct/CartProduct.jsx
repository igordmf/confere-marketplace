import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, NoDiscountPrice, Discount, FinalPrice } from './styles';
import promotionPrice from '../../../helpers/promotionPrice';
import { removeCartItem } from '../../../redux/actions';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(removeCartItem(product));
  }
  
  return (
    <Container>
      <div>
        <img src={ product.image } alt={ product.name } />
      </div>
      <span>{ product.name }</span>
      <span>Tamanho: { product.chosedSize }</span>
      <div>
        {product.discount_percentage && (
          <>
            <NoDiscountPrice>{ product.actual_price }</NoDiscountPrice>
            <Discount>{ product.discount_percentage }</Discount>
          </>
        )}
        <FinalPrice>{ promotionPrice(product) }</FinalPrice>
      </div>
      <button type="button" onClick={ () => removeFromCart() }>Remover</button>
    </Container>
  )
}

export default ProductCard;
