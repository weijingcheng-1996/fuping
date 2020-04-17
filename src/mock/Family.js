import Mock from 'mockjs'
const data = [
    {
        "_id": {
            "$oid": "5abc68cacbfd3c21185032a6"
        },
        "aab001": "86300000775478",
        "aab002": "土玉全",
        "aab003": {
            "value": "1",
            "label": "男"
        },
        "aab004": "632121194212283511",
        "aab005": "19421228",
        "aab006": {
            "value": "01",
            "label": "户主"
        },
        "aab007": {
            "value": "05",
            "label": "藏族"
        },
        "aab008": {
            "value": "01",
            "label": "文盲或半文盲"
        },
        "aab009": {
            "value": null,
            "label": "无"
        },
        "aab010": {
            "value": "04",
            "label": "无劳动力"
        },
        "aab011": {
            "value": null,
            "label": "无"
        },
        "aab012": "0",
        "aab013": {
            "value": "1",
            "label": "参加"
        },
        "aab014": {
            "value": "1",
            "label": "参加"
        },
        "aab015": {
            "value": "1",
            "label": "正常"
        },
        "aab017": {
            "value": "01",
            "label": "健康"
        },
        "aab017_query": "健康",
        "aab018": {
            "value": "01",
            "label": "居民身份证（户口簿）"
        },
        "aab019": {
            "value": "0",
            "label": "否"
        },
        "aab021": {
            "value": null,
            "label": "无"
        },
        "aab022": {
            "value": "1",
            "label": "是"
        },
        "aab025": null,
        "aab026": null,
        "aab027": null,
        "aab028": null,
        "aab029": null,
        "aab030": {
            "value": "0",
            "label": "否"
        },
        "aab031": null,
        "aab033": null,
        "aab034": null,
        "aab035": null,
        "aab036": null,
        "aab038": null,
        "aab039": null,
        "aab040": null,
        "aab041": null,
        "aab042": null,
        "aab043": null,
        "aab044": null,
        "aab045": null,
        "aab046": null,
        "aab047": null,
        "aab048": null,
        "aab049": null,
        "aab050": null,
        "aab051": {
            "value": null,
            "label": "无"
        },
        "aab060": "{:value=>nil, :label=>\"无\"}",
        "aab061": null,
        "aab062": "{:value=>nil, :label=>\"无\"}",
        "aab063": null,
        "aab064": {
            "value": null,
            "label": "无"
        },
        "aab067": null,
        "aab071": "0",
        "aab072": {
            "value": null,
            "label": "无"
        },
        "aac001": "86300000184649",
        "aac125": {
            "value": null,
            "label": "无"
        },
        "aak033": {
            "value": "13",
            "label": "群众"
        },
        "aar001": null,
        "aar022": null,
        "aar023": null,
        "aar024": null,
        "aar025": null,
        "aar040": {
            "value": "2019",
            "label": "2019年度"
        },
        "aar041": {
            "value": 2014,
            "label": "无"
        },
        "acr029": {
            "value": null,
            "label": "无"
        },
        "baz002": null,
        "family_id": {
            "$oid": "5a4b9f930c17541560b56959"
        },
        "id_no": "632121194212283511",
        "is_valid": 0,
        "name": "土玉全",
        "valid": 0
    },
    {
        "_id": {
            "$oid": "5abc68cacbfd3c21185032a7"
        },
        "aab001": "86300000775480",
        "aab002": "李羊快吉",
        "aab003": {
            "value": "2",
            "label": "女"
        },
        "aab004": "63212119470505352X",
        "aab005": "19470505",
        "aab006": {
            "value": "02",
            "label": "配偶"
        },
        "aab007": {
            "value": "05",
            "label": "藏族"
        },
        "aab008": {
            "value": "01",
            "label": "文盲或半文盲"
        },
        "aab009": {
            "value": "01",
            "label": "非在校生"
        },
        "aab010": {
            "value": "04",
            "label": "无劳动力"
        },
        "aab011": {
            "value": null,
            "label": "无"
        },
        "aab012": "0",
        "aab013": {
            "value": null,
            "label": "无"
        },
        "aab014": {
            "value": null,
            "label": "无"
        },
        "aab015": {
            "value": "1",
            "label": "正常"
        },
        "aab017": {
            "value": "02",
            "label": "长期慢性病"
        },
        "aab017_query": "长期慢性病",
        "aab018": {
            "value": "01",
            "label": "居民身份证（户口簿）"
        },
        "aab019": {
            "value": "0",
            "label": "否"
        },
        "aab021": {
            "value": null,
            "label": "无"
        },
        "aab022": {
            "value": "1",
            "label": "是"
        },
        "aab025": null,
        "aab026": null,
        "aab027": null,
        "aab028": null,
        "aab029": null,
        "aab030": {
            "value": "1",
            "label": "是"
        },
        "aab031": null,
        "aab033": null,
        "aab034": null,
        "aab035": null,
        "aab036": null,
        "aab038": null,
        "aab039": null,
        "aab040": null,
        "aab041": null,
        "aab042": null,
        "aab043": null,
        "aab044": null,
        "aab045": null,
        "aab046": null,
        "aab047": null,
        "aab048": null,
        "aab049": null,
        "aab050": null,
        "aab060": null,
        "aab061": null,
        "aab062": null,
        "aab063": null,
        "aab067": null,
        "aac001": "86300000184649",
        "aak033": {
            "value": "13",
            "label": "群众"
        },
        "aar001": null,
        "aar022": null,
        "aar023": null,
        "aar024": null,
        "aar025": null,
        "aar040": {
            "value": "201712",
            "label": "2017年底"
        },
        "aar041": {
            "value": 2014,
            "label": "无"
        },
        "baz002": null,
        "family_id": {
            "$oid": "5a4b9f930c17541560b56959"
        },
        "id_no": "63212119470505352X",
        "is_valid": 0,
        "name": "李羊快吉",
        "valid": 0
    },
    {
        "_id": {
            "$oid": "5abc68cacbfd3c21185032a8"
        },
        "aab001": "86300000775479",
        "aab002": "土存成",
        "aab003": {
            "value": "1",
            "label": "男"
        },
        "aab004": "632121197410153535",
        "aab005": "19741015",
        "aab006": {
            "value": "03",
            "label": "之子"
        },
        "aab007": {
            "value": "05",
            "label": "藏族"
        },
        "aab008": {
            "value": "02",
            "label": "小学"
        },
        "aab009": {
            "value": null,
            "label": "无"
        },
        "aab010": {
            "value": "01",
            "label": "普通劳动力"
        },
        "aab011": {
            "value": null,
            "label": "无"
        },
        "aab012": "2",
        "aab013": {
            "value": "1",
            "label": "参加"
        },
        "aab014": {
            "value": "1",
            "label": "参加"
        },
        "aab015": {
            "value": "1",
            "label": "正常"
        },
        "aab017": {
            "value": "01",
            "label": "健康"
        },
        "aab017_query": "健康",
        "aab018": {
            "value": "01",
            "label": "居民身份证（户口簿）"
        },
        "aab019": {
            "value": "0",
            "label": "否"
        },
        "aab021": {
            "value": null,
            "label": "无"
        },
        "aab022": {
            "value": "1",
            "label": "是"
        },
        "aab025": "630000000000",
        "aab026": "630100000000",
        "aab027": null,
        "aab028": null,
        "aab029": null,
        "aab030": {
            "value": "0",
            "label": "否"
        },
        "aab031": null,
        "aab033": null,
        "aab034": null,
        "aab035": null,
        "aab036": null,
        "aab038": null,
        "aab039": null,
        "aab040": null,
        "aab041": null,
        "aab042": null,
        "aab043": null,
        "aab044": null,
        "aab045": null,
        "aab046": null,
        "aab047": null,
        "aab048": null,
        "aab049": null,
        "aab050": null,
        "aab051": {
            "value": null,
            "label": "无"
        },
        "aab060": "{:value=>nil, :label=>\"无\"}",
        "aab061": null,
        "aab062": "{:value=>nil, :label=>\"无\"}",
        "aab063": null,
        "aab064": {
            "value": null,
            "label": "无"
        },
        "aab067": null,
        "aab071": "0",
        "aab072": {
            "value": null,
            "label": "无"
        },
        "aac001": "86300000184649",
        "aac125": {
            "value": null,
            "label": "无"
        },
        "aak033": {
            "value": "13",
            "label": "群众"
        },
        "aar001": null,
        "aar022": null,
        "aar023": null,
        "aar024": null,
        "aar025": null,
        "aar040": {
            "value": "2019",
            "label": "2019年度"
        },
        "aar041": {
            "value": 2014,
            "label": "无"
        },
        "acr029": {
            "value": null,
            "label": "无"
        },
        "baz002": null,
        "family_id": {
            "$oid": "5a4b9f930c17541560b56959"
        },
        "id_no": "632121197410153535",
        "is_valid": 0,
        "name": "土存成",
        "valid": 0
    },
    {
        "_id": {
            "$oid": "5abc68cacbfd3c21185032a9"
        },
        "aab001": "86300000775481",
        "aab002": "尼玛措",
        "aab003": {
            "value": "2",
            "label": "女"
        },
        "aab004": "632121200506020045",
        "aab005": "20050602",
        "aab006": {
            "value": "08",
            "label": "之孙女"
        },
        "aab007": {
            "value": "05",
            "label": "藏族"
        },
        "aab008": {
            "value": null,
            "label": "无"
        },
        "aab009": {
            "value": "05",
            "label": "八年级"
        },
        "aab010": {
            "value": "04",
            "label": "无劳动力"
        },
        "aab011": {
            "value": null,
            "label": "无"
        },
        "aab012": "0",
        "aab013": {
            "value": "1",
            "label": "参加"
        },
        "aab014": {
            "value": "0",
            "label": "未参加"
        },
        "aab015": {
            "value": "1",
            "label": "正常"
        },
        "aab017": {
            "value": "01",
            "label": "健康"
        },
        "aab017_query": "健康",
        "aab018": {
            "value": "01",
            "label": "居民身份证（户口簿）"
        },
        "aab019": {
            "value": "0",
            "label": "否"
        },
        "aab021": {
            "value": null,
            "label": "无"
        },
        "aab022": {
            "value": "1",
            "label": "是"
        },
        "aab025": null,
        "aab026": null,
        "aab027": null,
        "aab028": null,
        "aab029": null,
        "aab030": {
            "value": "0",
            "label": "否"
        },
        "aab031": null,
        "aab033": null,
        "aab034": null,
        "aab035": null,
        "aab036": null,
        "aab038": null,
        "aab039": null,
        "aab040": null,
        "aab041": null,
        "aab042": null,
        "aab043": null,
        "aab044": null,
        "aab045": null,
        "aab046": null,
        "aab047": null,
        "aab048": null,
        "aab049": null,
        "aab050": null,
        "aab051": {
            "value": null,
            "label": "无"
        },
        "aab060": "{:value=>nil, :label=>\"无\"}",
        "aab061": null,
        "aab062": "{:value=>nil, :label=>\"无\"}",
        "aab063": null,
        "aab064": {
            "value": null,
            "label": "无"
        },
        "aab067": null,
        "aab071": "0",
        "aab072": {
            "value": null,
            "label": "无"
        },
        "aac001": "86300000184649",
        "aac125": {
            "value": null,
            "label": "无"
        },
        "aak033": {
            "value": "13",
            "label": "群众"
        },
        "aar001": null,
        "aar022": null,
        "aar023": null,
        "aar024": null,
        "aar025": null,
        "aar040": {
            "value": "2019",
            "label": "2019年度"
        },
        "aar041": {
            "value": 2014,
            "label": "无"
        },
        "acr029": {
            "value": null,
            "label": "无"
        },
        "baz002": null,
        "family_id": {
            "$oid": "5a4b9f930c17541560b56959"
        },
        "id_no": "632121200506020045",
        "is_valid": 0,
        "name": "尼玛措",
        "valid": 0
    }
]
Mock.mock('http://localhost:3000/family', 'get', data)