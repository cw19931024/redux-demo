import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../../store";
import { getSaga } from "../../store/action/leftMenu-actions";

class LeftMenu extends Component {
  constructor() {
    super();
  }

  componentDidMount(){
    const action = getSaga();
    store.dispatch(action)  
  }

  render() {
    const { menu } = this.props;
    return (
      <div className="left-content">
        <ul className={"leftMenu"}>
          {menu &&
            menu.map((item, key) => {
              return (
                <li key={item.key}>
                  <p>{item.title}</p>
                  {item.children && item.children.length > 0 && (
                    <ul>
                      {item.children.map((i) => {
                        return (
                          <li key={i.key}>
                            <p>{i.title}</p>
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
