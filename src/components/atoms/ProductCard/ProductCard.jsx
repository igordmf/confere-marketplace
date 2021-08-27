import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, NoDiscountPrice, Discount, FinalPrice } from './styles';
import promotionPrice from '../../../helpers/promotionPrice';
import { addProductToCart } from '../../../redux/actions';

function ProductCard({ product }) {
  const [size, setSize] = useState(null);
  const dispatch = useDispatch();
  console.log(size);

  const addToCart = () => {
    if (size) {
      console.log('addToCart');
      dispatch(addProductToCart(product))
    } else {
      console.log('escolha um tamanho');
    }
  }

  return (
    <Container>
      <div>
        <img src={ product.image } alt={ product.name } />
      </div>
      <span>{ product.name }</span>
      {product.sizes && (
        <span>Tamanhos {product.sizes.map((size) => size.available
          ? (
              <button
                key={ size.size }
                onClick={ () => setSize(size.size) }
                style={ (size.size) ? { backgroundColor: "#e8ebf1" } : { backgroundColor: "blue" }}
              >
                {(size.size)}
              </button>)
          : null)}
        </span>
      )}
      <div>
        {product.discount_percentage && (
          <>
            <NoDiscountPrice>{ product.actual_price }</NoDiscountPrice>
            <Discount>{ product.discount_percentage }</Discount>
          </>
        )}
        <FinalPrice>{ promotionPrice(product) }</FinalPrice>
      </div>
      <button type="button" onClick={ () => addToCart() }>Comprar</button>
    </Container>
  )
}

export default ProductCard;
