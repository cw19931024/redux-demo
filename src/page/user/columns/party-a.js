const columns = {
    "data": {
        "columns": [
            {
                "title": "姓名",
                "dataIndex": "name",
                "key": "name"
            },
            {
                "title": "年龄",
                "dataIndex": "age",
                "key": "age"
            },
            {
                "title": "住址",
                "dataIndex": "address",
                "key": "address"
            },
            {
                "title": "家庭地址",
                "dataIndex": "address1",
                "key": "address1"
            },
            {
                "title": "游戏",
                "dataIndex": "game",
                "key": "game"
            },
            {
                "title": "爱好",
                "dataIndex": "like",
                "key": "like"
            },
            {
                "title": "vip",
                "dataIndex": "vip",
                "key": "vip"
            }
        ],
        "formData": [
            {
                "key": "name",
                "label": "姓名",
                labelAlign:'right',
                "type": {
                    "key": "input",
                    "config": {}
                }
            },
            {
                "key": "adress",
                "label": "地址",
                labelAlign:'right',
                "type": {
                    "key": "input",
                    "config": {}
                }
            },
            {
                "key": "age",
                "label": "年龄",
                labelAlign:'right',
                "type": {
                    "key": "input",
                    "config": {}
                }
            },
            {
                "key": "area",
                "label": "地区",
                labelAlign:'right',
                "type": {
                    "key": "select",
                    "config": {
                        children:[
                            {label:'武汉',value:'wuhan'},
                            {label:'上海',value:'shanghai'},
                            {label:'深圳',value:'shenzhen'},
                            {label:'成都',value:'chengdu'},
                        ]
                    }
                }
            },
            {
                "key": "time",
                "label": "录入日期",
                labelAlign:'right',
                "type": {
                    "key": "date",
                    "config": {
                        className:'wid100'
                    }
                }
            }
        ]
    }
};
export default columns;