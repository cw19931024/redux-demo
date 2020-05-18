import React, { Component } from "react";
import store from "../../store";
import { Menu } from "antd";
import { getMenu, GET_MENU_LIST } from "../../store/action/leftMenu-actions";
import { setItem } from "../util/localstorage";
import logo from "../../file/logo.png";
const { SubMenu } = Menu;


class Header extends Component {
  state = {
    menuTop: [
      { title: "客源管理", id: 1 },
      { title: "房源管理", id: 2 },
    ],
  };

  handleClick = e => {
    getMenu(e.key);
  }

  ouLogin = () => {
    localStorage.clear();
    window.location.reload();
  };

  render() {
    return (
      <header className={"app-header"}>
        <img src={logo} style={{ 'height': '48px' }} className={'app-logo'} />
        <div className="menu-top">
          <Menu onClick={this.handleClick} mode="horizontal">
            {this.state.menuTop.map((item, key) => {
              return (
                <Menu.Item key={item.id} className="menu-btn">
                  {item.title}
                </Menu.Item>
              );
            })}
          </Menu>
        </div>
        <div className="userInfo">
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            <SubMenu title="风陵渡">
              <Menu.Item key="setting:1">用户中心</Menu.Item>
              <Menu.Item key="setting:2">修改密码</Menu.Item>
              <Menu.Item key="setting:3" onClick={this.ouLogin}>退出登录</Menu.Item>
            </SubMenu>
          </Menu>

        </div>
      </header>
    );
  }
}

export default Header;
