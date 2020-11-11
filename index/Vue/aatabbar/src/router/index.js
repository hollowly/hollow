import Vue from 'vue'
import Router from 'vue-router'


const home = () => import('../components/home/home')
const profile = () => import('../components/profile/profile')
const shopcart = () => import('../components/shopcart/shopcart')
const categories = () => import('../components/categories/categories')

Vue.use(Router)

export default new Router({
  routes: [
    {
			path: '/',
			redirect:"/home"
		},
		{
			path:'/home',
			component:home
		},
		{
			path:'/profile',
			component:profile
		},
		{
			path:'/shopcart',
			component:shopcart
		},
		{
			path:'/categories',
			component:categories
		}
	],
	mode:"history"
	})
