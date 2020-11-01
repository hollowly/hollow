import Vue from 'vue'
import Router from 'vue-router'

const basic = () => import('../components/basic')
Vue.use(Router)

export default new Router({
  routes: [
		{
			path:'/basic',
			component:basic
		}
	],
	mode:'history',
	linkActiveClass:'active',
})
