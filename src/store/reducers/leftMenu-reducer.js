import { GET_MENU_LIST, GET_SAGA } from "../actionTypes";

const initialState = [];
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MENU_LIST:
      return action.value;
    case GET_SAGA:
      return action.value;
    default:
      return state;
  }
}
