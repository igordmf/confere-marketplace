import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, NoDiscountPrice, Discount, FinalPrice } from './styles';
import { removeCartItem, decreaseQuantity, increaseQuantity } from '../../../redux/actions';
import promotionPrice from '../../../helpers/priceAndQuantityFunctions/promotionPrice';
import totalQuantityPrice from '../../../helpers/priceAndQuantityFunctions/totalQuantityPrice';
import removeFromLocalStorage from '../../../helpers/localStorage/removeFromLocalStorage';
import updateQttLocalStorage from '../../../helpers/localStorage/updateQttLocalStorage';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    removeFromLocalStorage(product);
    dispatch(removeCartItem(product));
  }

  const decreaseQtt = (product) => {
    if(product.quantity !== 1) {
      dispatch(decreaseQuantity(product));
      updateQttLocalStorage([product, 'decrease']);
    }
  }

  const increaseQtt = (product) => {
    dispatch(increaseQuantity(product));
    updateQttLocalStorage([product, 'increase']);
  }
  
  return (
    <Container>
      <div>
        <img src={ product.image } alt={ product.name } />
      </div>
      <span>{ product.name }</span>
      <span>Tamanho: { product.chosenSize }</span>
      <div>
        {product.discount_percentage && (
          <>
            <NoDiscountPrice>{ product.actual_price }</NoDiscountPrice>
            <Discount>{ product.discount_percentage }</Discount>
          </>
        )}
        <FinalPrice>{ promotionPrice(product) }</FinalPrice>
      </div>
      <span>Quantidade: 
        <button onClick={ () => decreaseQtt(product) }>-</button>
        {product.quantity}
        <button onClick={ () => increaseQtt(product) }>+</button>
      </span>
      <span>{ totalQuantityPrice(product) }</span>
      <button type="button" onClick={ () => removeFromCart() }>Remover</button>
    </Container>
  )
}

export default ProductCard;
