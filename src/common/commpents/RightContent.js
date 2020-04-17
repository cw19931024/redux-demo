import React, { Component } from "react";
import Caft from "../../page/caft";
class RightContent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="right-content">
        <p>right</p>
        <Caft />
      </div>
    );
  }
}

export default RightContent;
