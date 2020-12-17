import Vue from 'vue'
import VueRouter from 'vue-router'


const index = () =>import('@/views/index')
const home = () =>import('@/views/home')
const about = () =>import('@/views/about')
const profile = () =>import('@/views/profile')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
		component:index,
		children:[
			{
				path:'/home',
				component:home
			},
			{
				path:'/about',
				component:about
			},
			{
				path:'/profile',
				component:profile
			},
		]
	},
]

const router = new VueRouter({
	routes,
	mode:'history'
})

export default router
