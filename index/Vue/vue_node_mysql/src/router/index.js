import Vue from 'vue'
import VueRouter from 'vue-router'

const axios = () => import('@/views/axios')

Vue.use(VueRouter)

const routes = [
  {
		path: '/',
		component:axios
	},	
]

const router = new VueRouter({
	routes,
	mode:'history'
})

export default router
