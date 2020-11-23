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
    path: '/service-project-detail/:id',  // 首页服务项目详情
    name: 'ServiceProjectDetail',
    component: () => import('../views/home/ServiceProjectDetail.vue')
  },
  {
    path: '/New-detail/:id',  // 首页新闻详情
    name: 'NewDetail',
    component: () => import('../views/home/NewDetail.vue')
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
    path: '/recruit',  // 招聘
    name: 'Recruit',
    component: () => import('../views/joinUs/recruit/Recruit.vue')
  },
  {
    path: '/download-app',  // APP下载
    name: 'Index',
    component: () => import('../views/downloadApp/index.vue')
  },
  {
    path: '*',  // APP下载
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'hash', // history
  base: process.env.BASE_URL,
  routes
})

export default router
