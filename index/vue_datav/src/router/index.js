import Vue from 'vue'
import VueRouter from 'vue-router'


const flyline = () =>import('../components/flyline')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
	},
	{
		path:'/flyline',
		components:flyline,
	}
]



const router = new VueRouter({
  routes,
	mode:'history',
})



export default router
