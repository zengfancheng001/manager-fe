import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'

// 1.全局注册element-plus: 方便和简洁
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import pinia from './store'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')
