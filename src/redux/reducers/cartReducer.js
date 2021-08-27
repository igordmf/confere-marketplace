import { ADD_TO_CART, REMOVE_ITEM } from '../actions/actionTypes';
import increaseItemQuantity from '../../helpers/increaseItemQuantity';

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if(state.cartItems.some((item) => item.name === action.payload.name && item.chosedSize === action.payload.chosedSize)) {
        const newCartItems = increaseItemQuantity(state.cartItems,action.payload);
        return { ...state,
          cartItems: [...newCartItems] };
      }
      const newItem = {...action.payload, quantity: 1 };
      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems.filter((item) => !(item.name === action.payload.name && item.chosedSize === action.payload.chosedSize))],
      }
    default:
      return state;
  }
}

export default cartReducer;