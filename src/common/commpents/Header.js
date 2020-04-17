import React, { Component } from "react";
import store from "../../store";
import { getMenu, GET_MENU_LIST } from "../../store/action/leftMenu-actions";
class Header extends Component {
  state = {
    menuTop: [
      { title: "客源管理", id: 1 },
      { title: "房源管理", id: 2 },
    ],
  };

  changeMenu = (e) => {
    const action = {
      type: GET_MENU_LIST,
      id: e,
    };
    getMenu(action);
  };

  render() {
    return (
      <header className={"app-header"}>
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
      </header>
    );
  }
}

export default Header;
