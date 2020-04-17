import { createStore, combineReducers } from "redux";
import cartReducer from "./cart-reducers";
import leftMenuReducer from "./leftMenu-reducer";

const rootReducer = combineReducers({
  leftMenu: leftMenuReducer,
  cart: cartReducer,
});

export default rootReducer;