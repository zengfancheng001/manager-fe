import hyRequest from '@/service'

export function usersListData(queryInfo: any) {
  return hyRequest.post({
    url: '/users/list',
    data: queryInfo
  })
}

export function deleteUserById(id: number) {
  return hyRequest.delete({
    url: `/users/${id}`
  })
}

// 新建用户
export function createUser(userInfo: any) {
  return hyRequest.post({
    url: '/users',
    data: userInfo
  })
}
