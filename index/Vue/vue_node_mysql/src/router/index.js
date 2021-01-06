import Vue from 'vue'
import VueRouter from 'vue-router'


const login = () => import('@/views/login')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
		name: 'Home',
		component:login
	},
	
]

const router = new VueRouter({
  routes
})

export default router
