import Vue from 'vue'
import VueRouter from 'vue-router'


const index = () =>import('@/views/index')
const home = () =>import('@/views/home')
const about = () =>import('@/views/about')
const profile = () =>import('@/views/profile')
const index2 = () => import('@/views/index2')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
		component:index,
		children:[
			{
				path:'/',
				component:index2
			},
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
