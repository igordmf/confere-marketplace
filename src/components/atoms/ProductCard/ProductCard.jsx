import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, NoDiscountPrice, Discount, FinalPrice, StyledPop } from './styles';
import promotionPrice from '../../../helpers/promotionPrice';
import { addProductToCart } from '../../../redux/actions';
import Popper from '@material-ui/core/Popper';

function ProductCard({ product }) {
  const [chosedSize, setChosedSize] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopper, setOpenPopper] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const addToCart = (event) => {
    if (chosedSize) {
      dispatch(addProductToCart({ ...product, chosedSize: chosedSize }));
      history.push('/cart');
    } else {
      setAnchorEl(event.currentTarget);
      setOpenPopper(true);

      setTimeout( () => {
        setOpenPopper(false);
      }, 2200);

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
        <span>{product.sizes.map((size) => size.available
          ? (
              <button
                key={ size.size }
                onClick={ () => setChosedSize(size.size) }
                style={ (size.size === chosedSize) ? { backgroundColor: "#4998ff" } : { backgroundColor: "#e8ebf1" }}
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
      <button type="button" onClick={ (event) => addToCart(event) }>Comprar</button>
      <Popper
        open={ !chosedSize && openPopper }
        anchorEl={ anchorEl }
        placement="bottom"
      >
        <StyledPop>Escolha um tamanho!</StyledPop>
      </Popper>
    </Container>
  )
}

export default ProductCard;
