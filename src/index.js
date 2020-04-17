import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./common/commpents/Header";
import Content from "./common/commpents/Content";
import { addCart } from "./store/action/cart-actions";
import './common/css/style.css'

ReactDOM.render(
  <Provider store={store}>
    <div id='app'>
      <Header />
      <Content />
    </div>
  </Provider>,
  document.getElementById("root")
);

// let unsub = store.subscribe(() => {
//   console.log(store.getState());
// });

// console.log("initState: ", store.getState());

// store.dispatch(addCart({ name: "星巴克", count: 20, money: 38 }));
// store.dispatch(addCart({ name: "瑞幸咖啡", count: 210, money: 18 }));
// store.dispatch(addCart({ name: "热干面", count: 2220, money: 4.5 }));

// unsub();
