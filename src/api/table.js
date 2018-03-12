import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/user/table',
    method: 'get',
    params
  })
}
