import { defineStore } from 'pinia'
import { accountLoginRequest } from '@/service/login/login'
import type { IAccount } from '@/types'
// import { localCache } from '@/utils/cache'

const LOGIN_TOKEN = 'login/token'

const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: '',
    // token: localCache.getCache(LOGIN_TOKEN) ?? '',
    username: ''
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      // 1.账号登录, 获取token等信息
      const loginResult = await accountLoginRequest(account)
      this.id = loginResult.data.id
      this.username = loginResult.data.username
      this.token = loginResult.data.token
      console.log(loginResult)
      console.log(this.token)

      // 2.进行本地缓存
      // localCache.setCache(LOGIN_TOKEN, this.token)
    }
  }
})

export default useLoginStore
