import store from "..";
import { getMenuList } from "../Api/menu";
import { UPDATE_GLOBAL_DATA, editGlobal } from "./global-actions";
export const GET_MENU_LIST = "GET_MENU_LIST";

export async function getMenu(action) {
  editGlobal({ type: UPDATE_GLOBAL_DATA, value: action.id });

  if (action.id == 2) {
    action.value = [{ title: "测试" }, { title: "测试2" }];
  } else {
    action.value = await getMenuList(action.id);
  }

  store.dispatch(action);
}
