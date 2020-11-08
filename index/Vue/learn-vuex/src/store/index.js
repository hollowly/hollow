
import Vue from 'vue'
import Vuex from 'vuex'

// 1. 安装插件
Vue.use(Vuex)

// 2. 创建对象
	// Store：单一状态树
const store = new Vuex.Store({
	// state：放一些基本的信息,和data类似
	state: {
		num:1000
	},
	// 修改状态
	mutations: {
		add(state) {
			state.num++
		},
		sub(state) {
			state.num--
		}
	},
	// getters:(计算属性) 和 computed 类似
	getters: {
		power(state) {
			return state.num * state.num * 2
		}
	}

})

// 3. 导出store组件
export default store