import React, { Component } from "react";
import { Button, Form, Input } from "antd";
import { setItem } from "../common/util/localstorage";
import logo from "../file/logo.png";
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
      <Form className="loginDiv" onFinish={this.login}>
        <Form.Item className={'align-center'}>
          <img src={logo} style={{ width: '80px' }} />
        </Form.Item>
        <Form.Item className={'align-center'}>
          <div className={'admin-name'}>
            风陵渡管理系统
          </div>
        </Form.Item>
        <Form.Item
          name="user"
          label="账号"
          rules={[
            {
              required: true,
              message: '请输入账号',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="pass"
          label="密码"
          rules={[

            {
              required: true,
              message: '请输入密码',
            },
          ]}
        >
          <Input type='pass' />
        </Form.Item>
        <Form.Item className={'align-center'}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
