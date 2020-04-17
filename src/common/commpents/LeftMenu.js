import React, { Component } from "react";
import { connect } from "react-redux";

class LeftMenu extends Component {
  constructor() {
    super();
  }

  render() {
    const { menu } = this.props;
    return (
      <div className="left-content">
        <ul>
          {menu &&
            menu.map((item, key) => {
              return <li key={key}>{item.title}</li>;
            })}
        </ul>
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
