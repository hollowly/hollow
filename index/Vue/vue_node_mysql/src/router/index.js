import Vue from 'vue'
import VueRouter from 'vue-router'


const login = () => import('@/views/login')
const register = () => import('@/views/register')
Vue.use(VueRouter)

const routes = [
  {
		path: '/',
	},
	{
		path:'/login',
		component:login
	},
	{
		path:"/register",
		component:register
	}
	
]

const router = new VueRouter({
  routes
})

export default router
