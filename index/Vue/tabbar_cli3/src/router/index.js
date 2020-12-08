import Vue from 'vue'
import VueRouter from 'vue-router'

const categories = () => import('../components/categories')
const shopcart = () => import('../components/shopcart')
const home = () => import('../components/home')
const profile = () => import('../components/profile')

Vue.use(VueRouter)
const routes = [
  {
		path: '/',
		redirect:'/categories'
	},
	{
		path:'/categories',
		component:categories
	},
	{
		path:'/shopcart',
		component:shopcart
	},
	{
		path:'/home',
		component:home
	},
	{
		path:'/profile',
		component:profile
	}
]

const router = new VueRouter({
	routes,
	mode:'history'
})

export default router
