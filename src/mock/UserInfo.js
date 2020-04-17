import Mock from 'mockjs'
const data = {
    "_id": {
        "$oid": "5a4b9f930c17541560b56959"
    },
    "aac001": "86300000184649",
    "aac004": "6215171100221172",
    "aac005": {
        "value": "01",
        "label": "国家标准"
    },
    "aac006": {
        "value": "05",
        "label": "一般农户"
    },
    "aac007": {
        "value": "09",
        "label": "缺资金"
    },
    "aac008": {
        "value": null,
        "label": "无"
    },
    "aac009": {
        "value": null,
        "label": "无"
    },
    "aac012": {
        "value": "0",
        "label": "否"
    },
    "aac013": {
        "value": "0",
        "label": "否"
    },
    "aac014": {
        "value": "0",
        "label": "否"
    },
    "aac015": {
        "value": null,
        "label": "无"
    },
    "aac017": 4,
    "aac019": {
        "value": null,
        "label": "无"
    },
    "aac023": 2017,
    "aac024": 0,
    "aac025": "86300000775478",
    "aac027": {
        "value": null,
        "label": "无"
    },
    "aac029": "土玉全",
    "aac031": "632121194212283511",
    "aac041": null,
    "aac071": 6000.0,
    "aac072": 1180.0,
    "aac073": 6000.0,
    "aac074": 1000.0,
    "aac076": 0.0,
    "aac077": 0.0,
    "aac078": 540.0,
    "aac079": 16385.0,
    "aac081": 17385.0,
    "aac082": 4096.25,
    "aac083": 3665.0,
    "aac084": {
        "value": "1",
        "label": "是"
    },
    "aac085": 4205.0,
    "aac086": 0.0,
    "aac087": 4440.0,
    "aac088": "1",
    "aac089": "1",
    "aac091": "1",
    "aac092": null,
    "aac093": null,
    "aac301": 21.65,
    "aac302": 1.0,
    "aac303": 1.5,
    "aac304": 1.5,
    "aac305": 0.0,
    "aac306": 0.0,
    "aac307": 0.0,
    "aac308": {
        "value": "1",
        "label": "是"
    },
    "aac311": {
        "value": "0",
        "label": "否"
    },
    "aac312": {
        "value": "1",
        "label": "是"
    },
    "aac313": {
        "value": "1",
        "label": "是"
    },
    "aac314": {
        "value": "1",
        "label": "是"
    },
    "aac315": 1.0,
    "aac316": {
        "value": "03",
        "label": "水泥路"
    },
    "aac317": 80.0,
    "aac318": {
        "value": "0",
        "label": "否"
    },
    "aac319": {
        "value": "1",
        "label": "有"
    },
    "aac320": {
        "value": "03",
        "label": "煤炭"
    },
    "aac322": {
        "value": null,
        "label": "无"
    },
    "aad001": "632121002006",
    "aaq002": "农村信用社",
    "aar001": "632121002000",
    "aar007": null,
    "aar008": "632121002006",
    "aar010": {
        "value": "1",
        "label": "已脱贫（享受政策）"
    },
    "aar012": "18997020519",
    "aar023": "63212100201",
    "aar024": "20191210163119",
    "aar025": "古城回族乡",
    "aar040": 0,
    "aar041": 0,
    "aar100": {
        "value": "1",
        "label": "有效"
    },
    "acr077": {
        "value": "0",
        "label": "无搬迁意愿"
    },
    "baz002": "5700001200936869",
    "code_type_values": [{
        "_id": {
            "$oid": "5a7ba5b7cbfd3c77e2f817b6"
        },
        "code_type": "AAC025",
        "is_int": false,
        "label": "户主个人编号",
        "result": "86300000775478",
        "value_label": "86300000775478"
    }, {
        "_id": {
            "$oid": "5a7ba5b7cbfd3c77e2f817b7"
        },
        "code_type": "AAC031",
        "is_int": false,
        "label": "户主证件号码",
        "result": "632121194212283511",
        "value_label": "632121194212283511"
    }, {
        "_id": {
            "$oid": "5a7ba5b7cbfd3c77e2f817b8"
        },
        "code_type": "AAC017",
        "is_int": false,
        "label": "家庭人口数",
        "result": "4",
        "value_label": "4"
    }, {
        "_id": {
            "$oid": "5a7ba5b7cbfd3c77e2f817b9"
        },
        "code_type": "AAC029",
        "is_int": false,
        "label": "户主姓名",
        "result": "土玉全",
        "value_label": "土玉全"
    }, {
        "_id": {
            "$oid": "5a7bd745cbfd3c08080f22f3"
        },
        "code_type": "AAC023",
        "is_int": false,
        "label": "脱贫年度",
        "result": "2016",
        "value_label": "2016"
    }, {
        "_id": {
            "$oid": "5a7cde34cbfd3c262a3414ab"
        },
        "code_type": "AAQ002",
        "is_int": false,
        "label": "开户银行",
        "result": "农村信用社",
        "value_label": "农村信用社"
    }, {
        "_id": {
            "$oid": "5a7cde34cbfd3c262a3414ac"
        },
        "code_type": "AAC004",
        "is_int": false,
        "label": "银行卡号",
        "result": "6215171100221172",
        "value_label": "6215171100221172"
    }, {
        "_id": {
            "$oid": "5a7cde34cbfd3c262a3414ad"
        },
        "code_type": "AAR012",
        "is_int": false,
        "label": "联系电话",
        "result": "18997020519",
        "value_label": "18997020519"
    }, {
        "_id": {
            "$oid": "5a7cde34cbfd3c262a3414ae"
        },
        "code_type": "AAC007",
        "is_int": false,
        "label": "主要致贫原因",
        "result": "09",
        "value_label": "缺资金"
    }, {
        "_id": {
            "$oid": "5a7cde34cbfd3c262a3414af"
        },
        "code_type": "AAC008",
        "is_int": false,
        "label": "其他致贫原因",
        "result": null,
        "value_label": null
    }, {
        "_id": {
            "$oid": "5a7cde34cbfd3c262a3414b0"
        },
        "code_type": "AAC009",
        "is_int": false,
        "label": "返贫原因",
        "result": null,
        "value_label": null
    }, {
        "_id": {
            "$oid": "5a7cde34cbfd3c262a3414b1"
        },
        "code_type": "AAC005",
        "is_int": false,
        "label": "识别标准",
        "result": "01",
        "value_label": "国家标准"
    }, {
        "_id": {
            "$oid": "5a7cde34cbfd3c262a3414b2"
        },
        "code_type": "AAR025",
        "is_int": false,
        "label": "所在乡",
        "result": "古城回族乡",
        "value_label": "古城回族乡"
    }, {
        "_id": {
            "$oid": "5a7cde34cbfd3c262a3414b3"
        },
        "code_type": "AAC012",
        "is_int": false,
        "label": "是否军烈属",
        "result": "0",
        "value_label": "否"
    }, {
        "_id": {
            "$oid": "5a7cde34cbfd3c262a3414b4"
        },
        "code_type": "AAC013",
        "is_int": false,
        "label": "是否独生子女户",
        "result": "0",
        "value_label": "否"
    }, {
        "_id": {
            "$oid": "5a7cde34cbfd3c262a3414b5"
        },
        "code_type": "AAC014",
        "is_int": false,
        "label": "是否双女户",
        "result": "0",
        "value_label": "否"
    }, {
        "_id": {
            "$oid": "5a7cde34cbfd3c262a3414b6"
        },
        "code_type": "AAR041",
        "is_int": false,
        "label": "新识别年度",
        "result": "2014",
        "value_label": "2014"
    }, {
        "_id": {
            "$oid": "5a7cde34cbfd3c262a3414b7"
        },
        "code_type": "AAR010",
        "is_int": false,
        "label": "脱贫状态",
        "result": "1",
        "value_label": "已脱贫（享受政策）"
    }, {
        "_id": {
            "$oid": "5a7cde34cbfd3c262a3414b8"
        },
        "code_type": "AAC006",
        "is_int": false,
        "label": "贫困户属性",
        "result": "05",
        "value_label": "一般农户"
    }],
    "first_date": "2013年12月",
    "households_no": "86300000184649",
    "location_code": "632121002006",
    "qr_code": {
        "url": "/uploads/family/qr_code/5a4b9f930c17541560b56959/86300000184649.png"
    }
}
Mock.mock('http://localhost:3000/user', 'get', data)