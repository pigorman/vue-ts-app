import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 对vue-router模块中的路由元信息进行约束
declare module 'vue-router' {
  interface RouteMeta {
    menu?: boolean
    title?: string
    icon?: string
    auth?: boolean
  }
}

//使用动态加载页面（懒加载）
const Home = () =>
  import(/* webpackChunkName: "home" */ '@/views/Home/HomeView.vue')
const Login = () =>
  import(/* webpackChunkName: "login" */ '@/views/Login/LoginView.vue')
const Sign = () =>
  import(/* webpackChunkName: "sign" */ '@/views/Sign/SignView.vue')
const Exception = () =>
  import(
    /* webpackChunkName: "exception" */ '@/views/Exception/ExceptionView.vue'
  )
const Apply = () =>
  import(/* webpackChunkName: "apply" */ '@/views/Apply/ApplyView.vue')
const Check = () =>
  import(/* webpackChunkName: "check" */ '@/views/Check/CheckView.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/sign', //进入首页重定向到sign
    meta: {
      menu: true,
      title: '考勤管理',
      icon: 'document-copy', //element-icon,路由页面读取到meta时，vue自动将其变为驼峰式的icon名字，在对应页面中使用element-icon
      auth: true,
    },
    children: [
      {
        path: 'sign',
        name: 'sign',
        component: Sign,
        meta: {
          menu: true,
          title: '在线打卡签到',
          icon: 'calendar',
          auth: true,
        },
      },
      {
        path: 'exception',
        name: 'exception',
        component: Exception,
        meta: {
          menu: true,
          title: '异常考勤查询',
          icon: 'warning',
          auth: true,
        },
      },
      {
        path: 'apply',
        name: 'apply',
        component: Apply,
        meta: {
          menu: true,
          title: '添加考勤审批',
          icon: 'document-add',
          auth: true,
        },
      },
      {
        path: 'check',
        name: 'check',
        component: Check,
        meta: {
          menu: true,
          title: '我的考勤审批',
          icon: 'finished ',
          auth: true,
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
