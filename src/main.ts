import { createApp } from "vue";
import App from "./App.vue";
import { registerApp } from "./global";
import 'normalize.css';
import './assets/css/index.less'
// import './service/axios_demo'

 import  ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'
import store from './store'
import hyRequest from "./service";




const app = createApp(App)


registerApp(app)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')

hyRequest.request({
    url:'/home/multidata',
    method:'GET'
})

