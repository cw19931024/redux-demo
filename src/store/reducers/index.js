import { createStore, combineReducers } from "redux";
import cartReducer from "./cart-reducers";
import leftMenuReducer from "./leftMenu-reducer";
import globalReducer from './global-reducer';

const rootReducer = combineReducers({
  leftMenu: leftMenuReducer,
  cart: cartReducer,
  global: globalReducer,
});

export default rootReducer;
