import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, NoDiscountPrice, Discount, FinalPrice, StyledPop } from './styles';
import promotionPrice from '../../../helpers/priceAndQuantityFunctions/promotionPrice';
import { ACTIONS } from '../../../redux/actions';
import Popper from '@material-ui/core/Popper';
import { LOCAL_STORAGE } from '../../../helpers/localStorage';

function ProductCard({ product }) {
  const [chosenSize, setChosenSize] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopper, setOpenPopper] = useState(false);
  const [sizeAnchorEl, setSizeAnchorEl] = useState(null);
  const [unavailableSize, setUnavailableSize] = useState(null);
  const [showUnavailable, setShowUnavailable] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const addToCart = (event) => {
    if (chosenSize) {
      LOCAL_STORAGE.itemToLocalStorage({ product, chosenSize: chosenSize });
      dispatch(ACTIONS.addProductToCart({ ...product, chosenSize: chosenSize }));
      history.push('/cart');
    } else {
      setAnchorEl(event.currentTarget);
      setOpenPopper(true);

      setTimeout( () => {
        setOpenPopper(false);
      }, 2200);
    }
  }

  const toggleChosenSize = (size) => {
    setShowUnavailable(false);
    setChosenSize(chosenSize === size ? null : size);

  }

  const showUnavailableSize = (event, size) => {
    setSizeAnchorEl(event.currentTarget);
    setShowUnavailable(true);
    setUnavailableSize(size);

    setTimeout( () => {
      setShowUnavailable(false);
      setUnavailableSize(null);
    }, 1800);
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
                onClick={ () => toggleChosenSize(size.size) }
                style={ (size.size === chosenSize) ? { backgroundColor: "#4998ff" } : { backgroundColor: "#e8ebf1" }}
              >
                {(size.size)}
              </button>)
          : (
            
              <button
                key={ size.size }
                onClick={ (event) => showUnavailableSize(event, size.size) }
                style={{ backgroundColor: "#e8ebf1" }}
              >
                {(size.size)}
                <Popper
                  open={ unavailableSize === size.size && showUnavailable }
                  anchorEl={ sizeAnchorEl }
                  placement="bottom"
                >
                  <StyledPop>Tamanho indisponível!</StyledPop>
                </Popper>
              </button>
            
            ))}
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
        open={ !chosenSize && openPopper }
        anchorEl={ anchorEl }
        placement="bottom"
      >
        <StyledPop>Escolha um tamanho!</StyledPop>
      </Popper>
    </Container>
  )
}

export default ProductCard;
