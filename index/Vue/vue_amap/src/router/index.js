import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
  },
]

const router = new VueRouter({
	routes,
	mode:"history"
})

export default router
