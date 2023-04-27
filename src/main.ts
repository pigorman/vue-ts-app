import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 状态管理vuex的key导入
import { key } from '@/store'
import store from './store'
// element-plus,element-css,中文资源库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// element-icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
// 注册element-icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 注册store,router,elementPlus
app
  .use(store, key)
  .use(router)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .mount('#app')
