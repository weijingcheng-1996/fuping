import request from '@/until/requset'

export function getFactionInfo() {
    return request({
        url: '/faction',
        method: 'GET'
    })
}