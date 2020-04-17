import Mock from 'mockjs'
const data = [
    {
        "AAB002": "刘志坚",
        "AAB003": {
            "value": "1",
            "label": "男"
        },
        "AAB004": null,
        "AAC001": "86300000184649",
        "AAC080": "5700000482680377",
        "AAF031": {
            "value": "142",
            "label": "乡科级副职"
        },
        "AAK021": {
            "value": null,
            "label": "无"
        },
        "AAK022": {
            "value": null,
            "label": "无"
        },
        "AAK024": {
            "value": null,
            "label": "无"
        },
        "AAK026": {
            "value": null,
            "label": "无"
        },
        "AAK027": {
            "value": null,
            "label": "无"
        },
        "AAK029": {
            "value": null,
            "label": "无"
        },
        "AAK031": {
            "value": "0",
            "label": "否"
        },
        "AAK032": {
            "value": "0",
            "label": "否"
        },
        "AAK033": {
            "value": "01",
            "label": "中共党员"
        },
        "AAK036": {
            "value": "30",
            "label": "大学专科"
        },
        "AAK037": {
            "value": null,
            "label": "无"
        },
        "AAK039": {
            "value": "0",
            "label": "否"
        },
        "AAK110": "5700000058316462",
        "AAK111": null,
        "AAP001": "平安区委宣传部",
        "AAP004": {
            "value": "60",
            "label": "街道、镇、乡"
        },
        "AAP110": 5700000349197537,
        "AAR001": "632121002000",
        "AAR008": "632121002000",
        "AAR011": "蒋海龙",
        "AAR012": "13007727988",
        "AAR013": "平安区平安大道",
        "AAR020": "20170101",
        "AAR021": "20201231",
        "AAR023": "63212100201",
        "AAR024": 20170111151317,
        "AAR025": "古城回族乡",
        "BAZ002": 5700000285068240,
        "_id": {
            "$oid": "5abc68cbcbfd3c21185032ab"
        },
        "family_id": {
            "$oid": "5a4b9f930c17541560b56959"
        },
        "name": "刘志坚"
    },
    {
        "AAB002": "郑小军",
        "AAB003": {
            "value": "1",
            "label": "男"
        },
        "AAC001": "86300000184649",
        "AAC080": "86300000046746",
        "AAF031": null,
        "AAK036": null,
        "AAK037": null,
        "AAK039": null,
        "AAK110": "86300000028463",
        "AAK111": "0",
        "AAP001": "青海省三江集团",
        "AAP004": {
            "value": "20",
            "label": "省"
        },
        "AAR008": "632121002006",
        "AAR012": "13997029568",
        "AAR013": "西宁市胜利路",
        "AAR020": "20160301",
        "AAR021": "20201231",
        "_id": {
            "$oid": "5abc68cbcbfd3c21185032ac"
        },
        "family_id": {
            "$oid": "5a4b9f930c17541560b56959"
        },
        "name": "郑小军"
    }
]
Mock.mock('http://localhost:3000/help', 'get', data)