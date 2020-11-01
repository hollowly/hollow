// import { bind } from 'lodash'
import Vue from 'vue'
import Router from 'vue-router'

const basic = () => import('../components/basic')
const v_bind =  () => import('../components/v-bind')


Vue.use(Router)

export default new Router({
  routes: [
		{
			path:'/basic',
			component:basic
		},
		{
			path:'/v-bind',
			component:v_bind
		}
	],
	mode:'history',
	// linkActiveClass:'active',
})
