import React, { Component } from "react";
import { setItem } from "../common/util/localstorage";

export default class Login extends Component {
  constructor() {
    super();
  }

  login = () => {
    setItem({
      key: "user",
      value: { isLogin: true, userName: "风陵渡" },
    });
    window.location.reload();
  };

  render() {
    return (
      <div className="loginDiv">
        <p>
          <span className="label">账号:</span>
          <input className="input-ctrl" placeholder="请输入账号" />
        </p>
        <p>
          <span className="label">密码:</span>
          <input className="input-ctrl" placeholder="请输入密码" />
        </p>
        <div className="btn-lyout">
          <button className="login-btn" onClick={this.login}>
            登录
          </button>
        </div>
      </div>
    );
  }
}
