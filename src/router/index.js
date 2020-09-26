import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/freely-combine',  // 自如寓
    name: 'Index',
    component: () => import('../views/freelyCombine/index.vue')
  },
  {
    path: '/service',  // 服务
    name: 'Index',
    component: () => import('../views/service/index.vue')
  },
  {
    path: '/qi-yue-will',  // 企悦会
    name: 'Index',
    component: () => import('../views/QiYueWill/index.vue')
  },
  {
    path: '/join-us',  // 加入我们
    name: 'Index',
    component: () => import('../views/joinUs/index.vue')
  },
  {
    path: '/download-app',  // APP下载
    name: 'Index',
    component: () => import('../views/downloadApp/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
