import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('../views/StepOne.vue')
  },
  {
    path: '/stepone',
    name: 'Step One',
    component: () => import('../views/StepTwo.vue')
  },
  {
    path: '/buy',
    name: 'Buy Now',
    component: () => import('../views/StepThree.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
