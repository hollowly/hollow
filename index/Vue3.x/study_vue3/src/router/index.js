import { createRouter, createWebHashHistory } from 'vue-router'

const index = () => import('../App.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: index
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
