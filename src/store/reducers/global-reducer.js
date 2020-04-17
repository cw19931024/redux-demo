import { UPDATE_GLOBAL_DATA } from "../action/global-actions";
const initState = {
  topId: null,
};

export default function (state = initState, action) {
  switch (action.type) {
    case UPDATE_GLOBAL_DATA:
      return {
        ...state,
        topId: action.value,
      };
    default:
      return state;
  }
}
