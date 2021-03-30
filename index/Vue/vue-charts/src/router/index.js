import { createRouter, createWebHistory } from 'vue-router'
const index = () => import('@/views/index.vue')

const routes = [
  {
    path: '/',
		component:index
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
