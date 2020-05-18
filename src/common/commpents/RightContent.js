import React, { Component } from "react";
import { Row, Breadcrumb } from "antd";
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import Caft from "../../page/caft";
class RightContent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="right-content">
        <Row className={'ptb10'}>
          <Breadcrumb>
            <Breadcrumb.Item href="">
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <UserOutlined />
              <span>商品设置</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>已上架列表</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Caft />
      </div>
    );
  }
}

export default RightContent;
