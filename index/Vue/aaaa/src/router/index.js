import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../components/home')
const news = () => import('../components/homeNews')
const message = () => import('../components/homeMessage')

const about = () => import('../components/about')
const user = () => import('../components/user')
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
			children: [
				{
					path:'',
					redirect:'news'
				},
				{
					path:'news',
					component:news
				},
				{
					path:'message',
					component:message
				}
			]
		},
		{
			path:'/about',
			component:about,
		},
		{
			path:'/user',
			component:user
		}
	],
	mode:'history',
	linkActiveClass:'active',
})
