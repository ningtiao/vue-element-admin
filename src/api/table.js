import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/user/table',
    method: 'get',
    params
  })
}

export function getMonth(params) {
  return request({
    url: '/schedule/month',
    method: 'post',
    params
  })
}
