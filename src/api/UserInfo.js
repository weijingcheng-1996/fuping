import request from '@/until/requset'

export function getInfo() {
    return request({
        url: '/user',
        method: 'GET'
    })
}