import { ACTION_TYPES } from './actionTypes';
import { products } from '../../db.json';

export const getProducts = (data) => ({
  type: ACTION_TYPES.GET_PRODUCTS,
  payload: data,
})

export function fetchProducts() {
  return ((dispatch) => {
    dispatch(getProducts(products));
  })
}

export const addProductToCart = (product) => ({
  type: ACTION_TYPES.ADD_TO_CART,
  payload: product,
})

export const removeCartItem = (product) => ({
  type: ACTION_TYPES.REMOVE_ITEM,
  payload: product,
})

export const filterProducts = (term) => ({
  type: ACTION_TYPES.FILTER_PRODUCTS,
  payload: term,
})

export const localStorageCartItems = (localStorageItems) => ({
  type: ACTION_TYPES.LOCAL_STORAGE_TO_CART,
  payload: localStorageItems,
})

export const decreaseQuantity = (product) => ({
  type: ACTION_TYPES.DECREASE_QUANTITY,
  payload: product,
})

export const increaseQuantity = (product) => ({
  type: ACTION_TYPES.INCREASE_QUANTITY,
  payload: product,
})