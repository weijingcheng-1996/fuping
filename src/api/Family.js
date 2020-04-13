import request from '@/until/requset'

export function getFamilyInfo() {
    return request({
        url: '/family',
        method: 'GET'
    })
}