import { takeEvery, put } from "redux-saga/effects";
import { GET_SAGA, GET_MENU_LIST } from "./actionTypes";
import axios from "axios";
function* sagaRun() {
  yield takeEvery(GET_SAGA, getSaga);
}

function* getSaga() {
  const res = yield axios.get(
    "https://www.fastmock.site/mock/43500c531963a5a5fda54cdac12c982e/xianju/getMenu"
  );
  const action = {
    type: GET_MENU_LIST,
    value: res.data.data,
  };
  yield put(action);
}

export default sagaRun;
