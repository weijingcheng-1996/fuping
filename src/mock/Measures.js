import Mock from 'mockjs'
const data = [
    {
        "AAR020": "20160105",
        "AAR021": "20161230",
        "ACR002": "平安区_产业扶贫_平安区2016年产业扶持项目",
        "ACR005": {
            "value": "40",
            "label": "产业扶贫"
        },
        "ACR009": {
            "value": "401",
            "label": "产业项目"
        },
        "ACR051": "20170803",
        "ACR221": {
            "value": "15",
            "label": "项目实施"
        },
        "_id": {
            "$oid": "5abc68cacbfd3c21185032aa"
        },
        "family_id": {
            "$oid": "5a4b9f930c17541560b56959"
        },
        "name": "平安区_产业扶贫_平安区2016年产业扶持项目"
    }
]
Mock.mock('http://localhost:3000/faction', 'get', data)