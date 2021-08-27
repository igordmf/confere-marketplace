import { GET_PRODUCTS, ADD_TO_CART, REMOVE_ITEM, FILTER_PRODUCTS } from './actionTypes';
import { products } from '../../db.json';

export const getProducts = (data) => ({
  type: GET_PRODUCTS,
  payload: data,
})

export function fetchProducts() {
  return ((dispatch) => {
    dispatch(getProducts(products));
  })
}

export const addProductToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
})

export const removeCartItem = (product) => ({
  type: REMOVE_ITEM,
  payload: product,
})

export const filterProducts = (term) => ({
  type: FILTER_PRODUCTS,
  payload: term,
})