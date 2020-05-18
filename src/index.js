import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./common/commpents/Header";
import Index from "./common/commpents/Index";
import Login from "./page/login";
import "./common/css/style.css";
import "antd/dist/antd.css";
import { getItem } from "./common/util/localstorage";

const user = JSON.parse(getItem("user")) || {};
console.log(user);

ReactDOM.render(
  <Provider store={store}>
    {user.isLogin ? (
      <div id="app">
        <Header />
        <Index />
      </div>
    ) : (
        <Login />
      )}
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
