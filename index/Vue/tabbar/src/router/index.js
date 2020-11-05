import Vue from 'vue'
import Router from 'vue-router'


const home = () => import('../views/home/home')
const categories = () => import('../views/categories/categories')
const profile = () => import('../views/profile/profile')
const shopcart = () => import('../views/shopcart/shopcart')


Vue.use(Router)

export default new Router({
  routes: [
    {
			path:'',
			redirect:'/home'
		},
		{
			path:'/home',
			component:home,
		},
		{
			path:'/categories',
			component:categories,
		},
		{
			path:'/profile',
			component:profile
		},
		{
			path:'/shopcart',
			component:shopcart
		}
	],

	mode:"history"
})
