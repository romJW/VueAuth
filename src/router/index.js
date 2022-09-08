import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../views/LogIn'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/check',
    name: 'check',
    component: () => import('../views/LogCheck')
    
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('../views/PersonalInfo')
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../views/Details')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/Account')
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('../views/Error')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
