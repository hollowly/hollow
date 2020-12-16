import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


const about = () =>import('../views/About')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: about
  }
]

const router = new VueRouter({
	routes,
	mode:'history'
})

export default router
