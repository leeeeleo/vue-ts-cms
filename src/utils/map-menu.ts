import { RouteRecord } from "vue-router";
import Localcache from "../utils/cache"
export function mapRoutes(userMenus: any[], currentPath?: string, breadArr?: any[]): RouteRecord[] {
    const routes: RouteRecord[] = []
    //1.先默认加载所有的routes
    const allRoutes: RouteRecord[] = []
    //使用webpack，动态加载每个文件,true是否递归
    const routesFile = require.context("../router/main", true, /\.ts/)
    //routesFile为每个文件对象，key为路径名字
    routesFile.keys().forEach(key => {
        //路径名字为main文件路径，需要拼接
        //完整的路径
        const route = require("../router/main" + key.split(".")[1])
        //所有的东西都在default里面
        allRoutes.push(route.default)
    })
    //将获取的路由表和上面webpack加载的进行查找，分主菜单和子菜单，进行递归
    const _getRoute = (menus: any[]) => {
        for (const menu of menus) {
            if (menu.type === 2) {
                const route = allRoutes.find(item => item.path === menu.url)
                if (route) routes.push(route)
            } else {
                _getRoute(menu.children)
            }
        }
    }
    _getRoute(userMenus)
    Localcache.setCache("routes", routes)
    return routes
}