import { ADD_TO_CART, REMOVE_ITEM,
  LOCAL_STORAGE_TO_CART, DECREASE_QUANTITY,
  INCREASE_QUANTITY } from '../actions/actionTypes';
import decreaseItemQuantity from '../../helpers/priceAndQuantityFunctions/decreaseItemQuantity';
import increaseItemQuantity from '../../helpers/priceAndQuantityFunctions/increaseItemQuantity';

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
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
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems.filter((item) => !(item.name === action.payload.name && item.chosenSize === action.payload.chosenSize))],
      };
    case LOCAL_STORAGE_TO_CART:
      return {
        ...state,
        cartItems: [...action.payload],
      };
    case DECREASE_QUANTITY:
      const newCartItems = decreaseItemQuantity(state.cartItems,action.payload);
      return { ...state,
        cartItems: [...newCartItems]
      };
    case INCREASE_QUANTITY:
      const newCart = increaseItemQuantity(state.cartItems,action.payload);
      return { ...state,
        cartItems: [...newCart]
      };
    default:
      return state;
  }
}

export default cartReducer;