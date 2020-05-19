import React, { Component } from "react";
import ListPage from "../common/ListPage";
import columns from "./columns/party-a";
// import ListPageHoc from "./PartyX";

// @ListPageHoc("PartyA")
class PartyA extends ListPage {
    state = {
        ...this.state,
        col: 6,
        columns: columns.data.columns,
        dataSource: [],
        formData: columns.data.formData,
    };

    btnGroup = [
        {
            title: "创建",
            icon: "setting",
            type: "primary",
            key: Math.random(),
            onClick: this.AddData,
        },
        {
            title: "删除",
            icon: "setting",
            type: "primary",
            value:'addData',
            key: Math.random(),
            onClick: this.AddData,
        },
        {
            title: "编辑",
            icon: "setting",
            type: "primary",
            key: Math.random(),
            onClick: this.AddData,
        },
    ];

    AddData() {
        console.log(1);
    }
}
export default PartyA;
