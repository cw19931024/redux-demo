import React, { Component } from "react";
import { connect } from "react-redux";
import { addCart } from "../store/action/cart-actions";
import store from "../store";
import "./index.css";
class Caft extends Component {

  constructor(props){
    super(props)

  }

  render() {
    const { tableSource } = this.props;
    console.log(this.props);
    return (
      <div>
        <table className="table-lyout">
          <tr>
            <th>商品名称</th>
            <th>数量</th>
            <th>价格</th>
          </tr>
          {tableSource.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>{item.money + "元"}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
const mapStateToPros = (state) => {
  return {
    tableSource: state.cart.cart,
  };
};

export default connect(mapStateToPros)(Caft);
