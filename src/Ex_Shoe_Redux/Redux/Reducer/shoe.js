// Truyền lên cho rootReducer ở root.js ,do rootReducer quản lí tất cả các reducer con
import { shoeArr } from "../../data";

let initialState = {
  shoeArr: shoeArr,
  detail: shoeArr[0],
  cart: [],
};

export let shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VIEW_DETAIL": {
      state.detail = action.payload;
      return { ...state };
    }
    case "ADD_SHOE": {
      let newCart = [...state.cart];
      let index = newCart.findIndex((item) => item.id == action.payload.id);
      if (index != -1) {
        newCart[index].carQuatity += 1;
      } else {
        const productCart = { ...action.payload, carQuatity: 1 };
        newCart.push(productCart);
      }
      state.cart = newCart;
      return { ...state };
    }
    case "QUANTITY": {
      const newCart = [...state.cart];
      const index = newCart.findIndex(
        (value) => value.id == action.payload.index
      );
      if (index != -1) {
        newCart[index].carQuatity =
          newCart[index].carQuatity + action.payload.tangGiam || 1;
      }

      state.cart = newCart;
      return { ...state };
    }
    case "DELETE_ITEM": {
      const newCart = [...state.cart];
      let index = newCart.findIndex((item) => item.id === action.payload);
      console.log(index);
      if (index !== -1) {
        newCart.splice(action.payload.index, 1);
      }
      state.cart = newCart;
      return { ...state };
    }
    default:
      return state;
  }
};
