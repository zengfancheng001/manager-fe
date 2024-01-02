import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系：path => component
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/main',
      component: () => import('../views/main/main.vue'),
      name: 'main'
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/notFound/notFound.vue')
    }
  ]
})

// 路由导航守卫
// 参数：to(跳转的位置)/(从哪里跳转过来)
// 返回值：返回值决定导航的路径
router.beforeEach((to) => {
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path === '/main' && !token) {
    // 只有登录成功才能进入main
    return '/login'
  }

  // 进入主页默认匹配第一个页面
  if (to.path === '/main') {
    return firstMenu?.url
  }
})
export default router
