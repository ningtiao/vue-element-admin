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

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}
