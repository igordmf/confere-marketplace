import { ADD_TO_CART } from "../actions/actionTypes";

const INITIAL_STATE = {
  cartItens: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItens: [...state.cartItens, action.payload],
      };
    default:
      return state;
  }
}

export default cartReducer;