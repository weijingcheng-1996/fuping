import Mock from 'mockjs'
const data = {
    "_id": {
        "$oid": "5abb2499cbfd3cb502c0fafa"
    },
    "code": "632121002006",
    "name": "木场村委会",
    "org_level": "70",
    "township_id": {
        "$oid": "5abb2498cbfd3cb502c0faf2"
    }
}
Mock.mock('http://localhost:3000/address','get',data)