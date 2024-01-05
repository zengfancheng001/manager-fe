import { getEntireRoles, getEntireDepartments } from '@/service/main/main'
import { defineStore } from 'pinia'

interface IMainState {
  entireRoles: any[]
  entireDepartments: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireRoles: [],
    entireDepartments: []
  }),
  actions: {
    // 获取角色和部门数据
    async fetchEntireDataAction() {
      const rolesResult = await getEntireRoles()
      const departmentResult = await getEntireDepartments()

      // 保存数据
      this.entireRoles = rolesResult.data.list
      this.entireDepartments = departmentResult.data.list
    }
  }
})

export default useMainStore
