import { createRouter, createWebHistory } from 'vue-router'
const Home =() => import('../views/home/Home')
const Group =() => import('../views/group/Group')
const Cart =() => import('../views/cart/Cart')
const Person =() => import('../views/person/Person')
//1.安装插件

//2.创建router
const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
  },
  {
    path:'/group',
    component:Group,
  },
  {
    path:'/cart',
    component:Cart,
  },
  {
    path:'/person',
    component:Person,
  },
]
const routerHistory = createWebHistory()
const router = new createRouter({
  //配置路由和组件之间的应用关系
  routes,
  history: routerHistory, //默认是hash模式，更改为H5的history，去掉浏览器地址栏hash中的#
  linkActiveClass:'active' //触发显示样式
})

export default router
