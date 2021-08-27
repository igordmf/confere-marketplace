import { ADD_TO_CART } from './actionTypes';

export const addProductToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
})