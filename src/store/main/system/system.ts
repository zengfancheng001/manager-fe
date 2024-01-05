import { defineStore } from 'pinia'
import { createUser, deleteUserById, usersListData } from '@/service/main/system/system'
import type { ISystemState } from '../type'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0
  }),
  actions: {
    // 获取用户列表
    async usersListAction(queryInfo: any) {
      const usersListResult = await usersListData(queryInfo)

      const { totalCount, list } = usersListResult.data
      this.usersTotalCount = totalCount
      this.usersList = list
    },
    // 删除用户
    async deleteUserByIdAction(id: number) {
      const deleteResult = await deleteUserById(id)
      console.log(deleteResult)
      // 请求新的数据
      this.usersListAction({ offset: 0, size: 10 })
    },
    async createUserAction(userInfo: any) {
      // 创建新用户
      const createResult = await createUser(userInfo)
      console.log(createResult)
      // 请求新的数据
      this.usersListAction({ offset: 0, size: 10 })
    }
  }
})

export default useSystemStore
