import store from "..";
import axios from "axios";
import { getMenuList } from "../Api/menu";
import { editGlobal } from "./global-actions";
import { GET_MENU_LIST, GET_SAGA } from "../actionTypes";

export async function getMenu(id) {
  editGlobal(id);
  let value;
  if (id == '2') {
    value = [{ title: "测试" }, { title: "测试2" }];
  } else {
    value = await getMenuList(id);
  }
  let action = {
    type: GET_MENU_LIST,
    value,
  };

  store.dispatch(action);
}

export const getSaga = () => ({
  type: GET_SAGA,
  value: [],
});
