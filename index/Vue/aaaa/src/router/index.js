// import { bind } from 'lodash'
import Vue from 'vue'
import Router from 'vue-router'

const basic = () => import('../components/basic')
const v_bind =  () => import('../components/v-bind')
const v_if = () => import('../components/v-if and v-for')
const ShoppingCart = () => import('../components/ShoppingCart')


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
		},
		{
			path:'/v-ifANDv-for',
			component:v_if
		},
		{
			path:'/ShoppingCart',
			component:ShoppingCart
		}
	],
	mode:'history',
	// linkActiveClass:'active',
})
