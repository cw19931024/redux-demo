import React, { Component } from "react";
import store from "../../store";
import { getMenu, GET_MENU_LIST } from "../../store/action/leftMenu-actions";
import { setItem } from "../util/localstorage";
class Header extends Component {
  state = {
    menuTop: [
      { title: "客源管理", id: 1 },
      { title: "房源管理", id: 2 },
    ],
  };

  changeMenu = (e) => {
    getMenu(e);
  };

  ouLogin = () => {
    localStorage.clear();
    window.location.reload();
  };

  render() {
    return (
      <header className={"app-header"}>
        <div className="menu-top">
          {this.state.menuTop.map((item, key) => {
            return (
              <a
                href="#"
                className="menu-btn"
                onClick={this.changeMenu.bind(this, item.id)}
              >
                {item.title}
              </a>
            );
          })}
        </div>
        <div className="userInfo">
          风陵渡
          <ul>
            <li>用户中心</li>
            <li>修改密码</li>
            <li onClick={this.ouLogin}>退出登录</li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
