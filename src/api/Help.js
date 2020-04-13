import request from '@/until/requset'

export function getHelpInfo() {
    return request({
        url: '/help',
        method: 'GET'
    })
}