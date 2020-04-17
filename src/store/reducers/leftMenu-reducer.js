import { GET_MENU_LIST } from "../action/leftMenu-actions";
const initialState = [];
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MENU_LIST:
      return action.value;
    default:
      return state;
  }
}
