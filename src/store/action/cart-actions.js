import store from "../index";

export const ADD_TO_CART = "ADD_TO_CART";
export function addCart(action) {
  store.dispatch(action);
}
