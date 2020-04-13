import request from '@/until/requset'

export function getAddressInfo() {
    return request({
        url: '/address',
        method: 'GET'
    })
}