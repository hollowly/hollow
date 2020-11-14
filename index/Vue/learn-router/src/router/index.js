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
			redirect: '/home',
		},
    {
      path: '/home',
			component: home,
			meta: {
				title:'首页'
			},
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
      component: about,
			meta: {
				title:'关于'
			}
		},
		{
			path:'/user/:id',
			component: user
		},
		{
			path:'/profile',
			component: profile,
			meta: {
				title:'档案'
			}
		}
	],
	mode: 'history',
	linkActiveClass:'active',
})


// // 前置守卫(guard)
// router.beforeEach((to, from, next) => {
// 	// 从from跳转到to
// 	document.title = to.matched[0].meta.title;
// 	next();
// })

// // 后置钩子(hook)
// router.afterEach((to, from) => {

// })

import VueRouter from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}