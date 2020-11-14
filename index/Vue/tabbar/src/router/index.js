import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = () => import('components/home/home')
const categories = () => import('components/categories/categories')
const shopcart = () => import('components/shopcart/shopcart')
const profile = () => import('components/profile/profile')

export default new Router({
  routes: [
    {
			path:'',
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
			path:'/shopcart',
			component:shopcart
		},
		{
			path:'/profile',
			component:profile
		}
	],
	

	mode:'history'
})


// 解决连续点击当前路由而发生的报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}