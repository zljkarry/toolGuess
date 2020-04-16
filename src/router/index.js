import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/choose',
    name: 'choose',
    component: () => import( /* webpackChunkName: "choose" */ '../views/choose.vue')
  },
  {
    path: '/easy',
    name: 'easy',
    component: () => import( /* webpackChunkName: "easy" */ '../views/easy.vue')
  },
  {
    path: '/oridinary',
    name: 'ordinary',
    component: () => import( /* webpackChunkName: "oridinary" */ '../views/oridinary.vue')
  },
  {
    path: '/hard',
    name: 'hard',
    component: () => import( /* webpackChunkName: "hard" */ '../views/hard.vue')
  },
  {
    path: '/over',
    name: 'over',
    component: () => import( /* webpackChunkName: "over" */ '../views/over.vue')
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: () => import( /* webpackChunkName: "over" */ '../views/ranking.vue')
  },
  
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router