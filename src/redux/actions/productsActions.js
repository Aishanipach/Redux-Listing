import { ActionTypes } from "../constants/action-types";

export const setProducts = (users) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: users,
  };
};

export const selectedProduct = (user) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: user,
  };
};

