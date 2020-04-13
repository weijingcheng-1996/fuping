import request from '@/until/requset'

export function getRemovalInfo() {
    return request({
        url: '/removal',
        method: 'GET'
    })
}