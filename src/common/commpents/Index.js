import React, { Component } from "react";
import store from "../../store";
import { getMenu, GET_MENU_LIST } from "../../store/action/leftMenu-actions";
import { connect } from "react-redux";
import Context from "../commpents/Content";
import Hello from "./Hello";
class Index extends Component {
  render() {
    const { global } = this.props;
    console.log(this.props);
    return global.defaultIndex ? <Context /> : <Hello />;
  }
}

const mapStateProps = (state) => {
  return {
    global: state.global,
  };
};

export default connect(mapStateProps)(Index);
