// import { localCache } from '@/utils/cache'
import hyRequest from '..'
import type { IAccount } from '@/types'
// import { LOGIN_TOKEN } from '@/global/constants'

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post({
    url: '/login',
    data: account
  })
}

// 根据id发送请求用户信息详情的
export function getUserInfoById(id: number) {
  return hyRequest.get({
    url: `/users/list/${id}`

    // headers: {
    //   Authorization: 'Bearer ' + localCache.getCache(LOGIN_TOKEN)
    // } 统一写在拦截器中
  })
}

// 根据角色请求菜单信息
export function getUserMenusByRoleId(id: number) {
  return hyRequest.get({
    url: `/role/${id}/menu`
  })
}
