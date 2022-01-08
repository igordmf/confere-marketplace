import { ACTION_TYPES } from '../actions/actionTypes';
import decreaseItemQuantity from '../../helpers/priceAndQuantityFunctions/decreaseItemQuantity';
import increaseItemQuantity from '../../helpers/priceAndQuantityFunctions/increaseItemQuantity';

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      if(state.cartItems.some((item) => item.name === action.payload.name && item.chosenSize === action.payload.chosenSize)) {
        const newCartItems = increaseItemQuantity(state.cartItems,action.payload);
        return { ...state,
          cartItems: [...newCartItems] };
      }
      const newItem = {...action.payload, quantity: 1 };
      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
      };
    case ACTION_TYPES.REMOVE_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems.filter((item) => !(item.name === action.payload.name && item.chosenSize === action.payload.chosenSize))],
      };
    case ACTION_TYPES.LOCAL_STORAGE_TO_CART:
      return {
        ...state,
        cartItems: [...action.payload],
      };
    case ACTION_TYPES.DECREASE_QUANTITY:
      const newCartItems = decreaseItemQuantity(state.cartItems,action.payload);
      return { ...state,
        cartItems: [...newCartItems]
      };
    case ACTION_TYPES.INCREASE_QUANTITY:
      const newCart = increaseItemQuantity(state.cartItems,action.payload);
      return { ...state,
        cartItems: [...newCart]
      };
    default:
      return state;
  }
}

export default cartReducer;