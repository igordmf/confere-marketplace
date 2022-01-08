import { ACTION_TYPES } from './actionTypes';
import { products } from '../../db.json';

export const ACTIONS = {
  getProducts: (data) => ({
    type: ACTION_TYPES.GET_PRODUCTS,
    payload: data,
  }),
  fetchProducts: () => {
    return ((dispatch) => {
      dispatch(this.getProducts(products));
    })
  },
  addProductToCart: (product) => ({
    type: ACTION_TYPES.ADD_TO_CART,
    payload: product,
  }),
  removeCartItem: (product) => ({
    type: ACTION_TYPES.REMOVE_ITEM,
    payload: product,
  }),
  filterProducts: (term) => ({
    type: ACTION_TYPES.FILTER_PRODUCTS,
    payload: term,
  }),
  localStorageCartItems: (localStorageItems) => ({
    type: ACTION_TYPES.LOCAL_STORAGE_TO_CART,
    payload: localStorageItems,
  }),
  decreaseQuantity: (product) => ({
    type: ACTION_TYPES.DECREASE_QUANTITY,
    payload: product,
  }),
  increaseQuantity: (product) => ({
    type: ACTION_TYPES.INCREASE_QUANTITY,
    payload: product,
  })
}
