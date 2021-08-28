import { GET_PRODUCTS, FILTER_PRODUCTS } from '../actions/actionTypes';
import stringCompareWithRegex from '../../helpers/stringCompareWithRegex';

const INITIAL_STATE = {
  products: [],
  filtredProducts: [],
}

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
        filtredProducts: [...action.payload],
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filtredProducts: [...state.products
          .filter((product) => stringCompareWithRegex(product.name, action.payload)
        )],
      };
    default:
      return state;
  }
}

export default productsReducer;