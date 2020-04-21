import { UPDATE_GLOBAL_DATA, GET_GLOBAL } from "../actionTypes";
import { setItem, getItem } from "../../common/util/localstorage";
const initState = JSON.parse(getItem("global")) || {
  topId: null,
  defaultIndex: false,
};

export default function (state = initState, action) {
  switch (action.type) {
    case UPDATE_GLOBAL_DATA:
      setItem({
        key: "global",
        value: { topId: action.value, defaultIndex: true },
      });
      return {
        ...state,
        topId: action.value,
        defaultIndex: true,
      };
    default:
      return state;
  }
}
