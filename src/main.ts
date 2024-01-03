import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'

// 1.全局注册element-plus: 方便和简洁
import ElementPlus from 'element-plus'
import { zhCn } from 'element-plus/es/locales.mjs'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import store from './store'
import icons from './global/register-icons'

const app = createApp(App)
app.use(ElementPlus, { locale: zhCn })
app.use(icons)
app.use(store)
app.use(router)
app.mount('#app')
