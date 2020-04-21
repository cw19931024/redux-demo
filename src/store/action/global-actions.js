import store from "../index";
import { UPDATE_GLOBAL_DATA } from "../actionTypes";
export function editGlobal(id) {
  const action = {
    type: UPDATE_GLOBAL_DATA,
    id,
  };
  store.dispatch(action);
}
