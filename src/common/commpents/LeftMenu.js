import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, NavLink, } from "react-router-dom";
import { Menu } from "antd";
import store from "../../store";
import { getSaga } from "../../store/action/leftMenu-actions";
const { SubMenu } = Menu;

class LeftMenu extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    const action = getSaga();
    store.dispatch(action)
  }

  handleClick = e => {
    console.log(e)
  }

  render() {
    const { menu } = this.props;
    const { defaultOpenKeys, selectedKeys } = this.state;
    return (
      <div className="left-content">
        <Menu
          className={"leftMenu"}
          onClick={this.handleClick}
          selectedKeys={selectedKeys}
          defaultOpenKeys={defaultOpenKeys}
          mode="inline"
        >
          {menu &&
            menu.map((item, key) => {
              return (
                <SubMenu key={item.key} title={item.title}>
                  {item.children && item.children.length > 0 && (
                    item.children.map((i) => {
                      return (
                        <Menu.Item>
                          <NavLink
                            to={{
                              pathname: i.url,
                              params: { id: 1 },
                              // search: "?id=name",
                            }}
                          >
                            {i.title}
                          </NavLink>
                        </Menu.Item>
                      );
                    })
                  )}
                </SubMenu>
              );
            })}
        </Menu>
      </div>
    );
  }
}

const mapStateTotps = (state) => {
  return {
    menu: state.leftMenu,
  };
};

export default connect(mapStateTotps)(LeftMenu);
