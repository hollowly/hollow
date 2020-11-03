import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../components/home')
const homeNews = () => import('../components/homeNews')
const homeMessage = () => import('../components/homeMessage')

const about = () => import('../components/about')
const user = () => import('../components/user')
const profile = () => import('../components/profile')


Vue.use(Router)

export default new Router({
  routes: [
		{
			path:'', 
			// redirect：重定向
			redirect: '/home'
		},
    {
      path: '/home',
			component: home,
			children: [
				{
					path:'',
					redirect:'news'
				},
				{
					path:'news',
					component:homeNews
				},
				{
					path:'message',
					component:homeMessage
				}
			]
    },
    {
      path: '/about',
      component: about
		},
		{
			path:'/user/:id',
			component: user
		},
		{
			path:'/profile',
			component: profile
		}
	],
	mode: 'history',
	linkActiveClass:'active'
})
