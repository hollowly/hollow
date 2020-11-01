// import { bind } from 'lodash'
import Vue from 'vue'
import Router from 'vue-router'

const basic = () => import('../components/basic')
const v_bind =  () => import('../components/v-bind')
const v_if = () => import('../components/v-if and v-for')
const ShoppingCart = () => import('../components/ShoppingCart')
const v_model = () => import('../components/v-model')
const parent_child_components = () => import('../components/parent-child-components')
const slots = () => import('../components/slots')


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
		},
		{
			path:'/v-model',
			component:v_model
		},
		{
			path:'/parent-child-components',
			component:parent_child_components
		},
		{
			path:'/slots',
			component:slots
		}
	],
	mode:'history',
	// linkActiveClass:'active',
})
