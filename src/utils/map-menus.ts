import type { RouteRecordRaw } from 'vue-router'

// 加载本地路由函数
function loadLocalRoutes() {
  const localRouters: RouteRecordRaw[] = []
  // 读取router/main下所有ts文件
  const files: Record<string, any> = import.meta.glob('../router/main/**/*ts', {
    eager: true
  })
  // 将加载的对象放到localRouters中
  for (const key in files) {
    const module = files[key]
    localRouters.push(module.default)
  }
  return localRouters
}

export let firstMenu: any = null //记录第一个需要匹配的菜单
export function mapMenusToRouters(userMenus: any[]) {
  //加载本地路由
  const localRoutes = loadLocalRoutes()
  // 根据菜单匹配正确的路由
  const routes: RouteRecordRaw[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path === submenu.url)
      if (route) routes.push(route)
      // 记录第一个被匹配到到的菜单
      if (!firstMenu && route) firstMenu = submenu
    }
  }
  return routes
}

/**
 * 根据路径去匹配需要显示的菜单
 * @param path 需要匹配的路径
 * @param userMenus 所有的菜单
 */
export function mapPathToMenu(path: string, userMenus: any[]) {
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        return submenu
      }
    }
  }
}

interface IBreadcrumbs {
  name: string
  path: string
}
export function mapPathToBreadcrumbs(path: string, userMenus: any[]) {
  // 1.定义面包屑
  const breadcrumbs: IBreadcrumbs[] = []

  // 2.遍历获取面包屑层级
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        // 1.顶层菜单
        breadcrumbs.push({ name: menu.name, path: menu.url })
        // 2.匹配菜单
        breadcrumbs.push({ name: submenu.name, path: submenu.url })
      }
    }
  }
  return breadcrumbs
}
