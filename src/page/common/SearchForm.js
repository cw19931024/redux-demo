import React, { Component } from "react";
import { Form, Row, Col, Input, Icon, Button } from "antd";
import InputItem from "./FormItem/InputItem";
import SelectItem from "./FormItem/SelectItem";
import DateItem from "./FormItem/DateItem";
import "../../css/searchForm.less";

class SearchForm extends Component {
  formRef = React.createRef();
  onFinish = (value) => {
    console.log(value)
    this.props.handleSearch && this.props.handleSearch(value);

  }

  handleReset() {
    console.log(this.props)

    console.log(Form)
    this.formRef.current.resetFields();

  }
  getFields() {
    const { formData, col = 8 } = this.props;
    return formData.map((item, index) => {
      return (item => {
        const commpnent = item.type;
        switch (commpnent.key) {
          case "input":
            return (
              <Col span={col} key={item.id}>
                <Form.Item
                  name={item.key}
                  label={item.label}
                  rules={[
                    {
                      required: false,
                      message: '请输入账号',
                    },
                  ]}
                >
                  <InputItem config={commpnent.config} />
                </Form.Item>
              </Col>
            );
          case "select":
            return (
              <Col span={col} key={item.id}>
                <Form.Item
                  name={item.key}
                  label={item.label}
                  rules={[
                    {
                      required: false,
                      message: '请输入账号',
                    },
                  ]}
                >
                  <SelectItem config={commpnent.config} />
                </Form.Item>
              </Col>
            );
          case "date":
            return (
              <Col span={col} key={item.id}>
                <Form.Item
                  name={item.key}
                  label={item.label}
                  rules={[
                    {
                      required: false,
                      message: '请输入账号',
                    },
                  ]}
                >
                  <DateItem config={commpnent.config} />
                </Form.Item>
              </Col>
            );
        }
      })(item);
    });
  }

  render() {
    return (
      <Form
        ref={this.formRef}
        className="ant-advanced-search-form"
        onFinish={this.onFinish}
      >
        <Row gutter={24}>{this.getFields()}</Row>
        <Row>
          <Col span={24} style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
            <Button
              style={{ marginLeft: 8 }}
              onClick={this.handleReset.bind(this)}
            >
              清除
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default SearchForm;
