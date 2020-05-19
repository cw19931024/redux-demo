import React, { Component } from "react";
import { Table, Breadcrumb, Button, Menu, Radio } from "antd";
import { SettingFilled } from "@ant-design/icons";
import SearchForm from "./SearchForm";
import "../../css/viewlyout.less";
import PropTypes from "prop-types";

class ListPage extends Component {
  constructor() {
    super();
    this.state = {
      col: 8,
      selectedRowKeys: [],
      dataSource: [],
      columns: []
    };
  }

  btnGroup = [];

  handleSearch(data) {
    console.log(data);
  }

  render() {
    const { selectedRowKeys, formData, col, dataSource, columns } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };

    return (
      <div className="view-lyout">
        <div className={"search-lyout"}>
          <ListPage.SearchForm
            formData={formData}
            col={col}
            handleSearch={this.handleSearch.bind(this)}
          />
        </div>
        <div className={"lyout-btn"}>
          {this.btnGroup.map((item, index) => {
            return (
              <Button key={index} type={item.type}>{item.title}</Button>
            )
          })
          }
        </div>
        <div className={"table-lyout"}>
          <Table
            size={"small"}
            dataSource={dataSource}
            columns={columns}
            rowSelection={rowSelection}
            scroll={{ y: 340 }}
            bordered={true}
            pagination={{
              showQuickJumper: true,
              showSizeChanger: true,
              defaultCurrent: 2,
              total: 500
            }}
          />
        </div>
      </div>
    );
  }
}
ListPage.SearchForm = SearchForm;

export default ListPage;
