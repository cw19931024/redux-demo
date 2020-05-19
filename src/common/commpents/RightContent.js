import React, { Component } from "react";
import { Row, Breadcrumb } from "antd";
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Caft from "../../page/caft";
import AddParty from "../../page/user/addParty";
import PartyA from "../../page/user/party-a";
import PartyB from "../../page/user/party-b";
import AddCommodity from "../../page/commodity/add";
import Scuess from "../../page/commodity/scuess";
import Failure from "../../page/commodity/failure";
import Audit from "../../page/commodity/audit";
import Authority from "../../page/config/authority";
import MenuConfig from "../../page/config/menu";
import Util from "../../page/config/util";
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
        <Switch>
          <Route path="/commodity/scuess" component={Scuess} />
          <Route path="/commodity/failure" component={Failure} />
          <Route path="/commodity/audit" component={Audit} />
          <Route path="/commodity/add" component={AddCommodity} />
          <Route path="/config/util" component={Util} />
          <Route path="/config/menu" component={MenuConfig} />
          <Route path="/config/authority" component={Authority} />
          <Route path="/user/partyA" component={PartyA} />
          <Route path="/user/partyB" component={PartyB} />
          <Route path="/user/add" component={AddParty} />
        </Switch>
      </div>
    );
  }
}

export default RightContent;
