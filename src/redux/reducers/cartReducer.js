import { ADD_TO_CART, REMOVE_ITEM } from "../actions/actionTypes";

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
    case REMOVE_ITEM:
      console.log(action.payload.name);
      console.log(action.payload.chosedSize);
      return {
        ...state,
        cartItens: [...state.cartItens.filter((item) => !(item.name === action.payload.name && item.chosedSize === action.payload.chosedSize))],
      }
    default:
      return state;
  }
}

export default cartReducer;