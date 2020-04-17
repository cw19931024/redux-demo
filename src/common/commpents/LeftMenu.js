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
        <ul className={"leftMenu"}>
          {menu &&
            menu.map((item, key) => {
              return (
                <li key={key}>
                  <p>{item.title}</p>
                  {item.children && item.children.length > 0 && (
                    <ul>
                      {item.children.map((i) => {
                        return (
                          <li key={key}>
                            <p>{item.title}</p>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
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
