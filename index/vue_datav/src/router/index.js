import Vue from 'vue'
import VueRouter from 'vue-router'

const flyline = () =>import('../components/flyline')
const dataV = () =>import('../components/dataV')

Vue.use(VueRouter)

const routes = [
  {
		path: '',
		redirect:'/dataV'
	},
	{
		path:'/data',
		component:dataV
	},
	{
		path:'/flyline',
		component:flyline,
	}
]



const router = new VueRouter({
  routes,
	mode:'history',
})



export default router
