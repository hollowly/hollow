import Vue from 'vue'
import Router from 'vue-router'

const categories  = () => import('../components/tabbar/categories/categories')
const home = () => import('../components/tabbar/home/home')
const profile = () => import('../components/tabbar/profile/profile')
const shopcart = () => import('../components/tabbar/shopcart/shopcart')

Vue.use(Router)

export default new Router({
  routes: [
    {
			path: '/',
			redirect:'/home'
		},
		{
			path:'/home',
			component:home
		},
		{
			path:'/categories',
			component:categories
		},
		{
			path:"/profile",
			component:profile
		},
		{
			path:'/shopcart',
			component:shopcart
		}
	],
	mode:'history'
})
