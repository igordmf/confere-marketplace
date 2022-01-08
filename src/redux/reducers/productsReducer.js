import { ACTION_TYPES } from '../actions/actionTypes';
import stringCompareWithRegex from '../../helpers/stringCompareWithRegex';

const INITIAL_STATE = {
  products: [],
  filtredProducts: [],
}

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
        filtredProducts: [...action.payload],
      };
    case ACTION_TYPES.FILTER_PRODUCTS:
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