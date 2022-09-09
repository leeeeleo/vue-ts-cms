import { createRouter,createWebHashHistory, RouteRecordRaw} from 'vue-router'


const routes :RouteRecordRaw[] = [
{
    path:'/',
    redirect:'/login'
},
{
    path:'/login',
    component: () => import('../components/views/login/login.vue') 
},
{
    path:'/main',
    component: () => import('../components/views/main/main.vue') 
}
]

const router = createRouter ({
    routes,
    history:createWebHashHistory()
})

export default router