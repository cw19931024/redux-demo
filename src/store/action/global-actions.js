import store from "../index";

export const UPDATE_GLOBAL_DATA = "UPDATE_GLOBAL_DATA";
export function editGlobal(action) {
  store.dispatch(action);
}



