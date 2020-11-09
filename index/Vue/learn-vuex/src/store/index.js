
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


const state = {
	stateMseeage:'我是root(根)state',
	num:1000,
	student: [
		{id:193001, name:"hollow", age:18},
		{id:193002, name:"query", age:19},
		{id:193003, name:"boby", age:24},
		{id:193004, name:"james", age:28},
		{id:193005, name:"tom", age:36},
	],
	info: {name:'koby',age:40,height:1.98},
	books:['jquery','java','php','python']
}


import mutations from './mutatuins'
import getters from './getters'
import actions from './actions'
import modulesA from './modules/modulesA'

const store = new Vuex.Store({
	state:state,
	mutations: mutations,
	getters: getters,
	actions: actions,
	modules: {
		a:modulesA
	}
})

export default store