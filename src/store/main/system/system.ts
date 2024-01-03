import { defineStore } from 'pinia'
import { usersListData } from '@/service/main/system/system'
import type { ISystemState } from '../type'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0
  }),
  actions: {
    async usersListAction() {
      const userListResult = await usersListData()
      const { totalCount, list } = await userListResult.data
      this.usersTotalCount = totalCount
      this.usersList = list
    }
  }
})

export default useSystemStore
