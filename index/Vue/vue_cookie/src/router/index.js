import Vue from 'vue'
import VueRouter from 'vue-router'

const index = () => import("@/views/index")
const login = () => import('@/views/login')

Vue.use(VueRouter)

const routes = [
  {
		path: '/',
		component:index
	},
	{
		path:'/login',
		component:login
	}
  
]

const router = new VueRouter({
	routes,
	mode:'history'
})

export default router
