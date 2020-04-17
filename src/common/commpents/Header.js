import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../../store";
import { getMenu, GET_MENU_LIST } from "../../store/action/leftMenu-actions";

class Header extends Component {
  constructor() {
    super();
    console.log(store.getState());
    this.state = {
      topMenu: [],
    };
  }

  changeMenu = (e) => {
    console.log(e);
    const action = {
      type: GET_MENU_LIST,
      id: e,
    };
    getMenu(action);
  };

  render() {
    return (
      <header className={"app-header"}>
        <a href="javascript:;" onClick={this.changeMenu.bind(this, 2)}>
          房源管理
        </a>
        <a href="javascript:;" onClick={this.changeMenu.bind(this, 1)}>
          客源管理
        </a>
      </header>
    );
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   console.log(dispatch, ownProps);
//   return {
//     add: (...args) => dispatch(addCart(...args)),
//   };
// };
// export default connect(mapDispatchToProps)(Header);

export default Header;
