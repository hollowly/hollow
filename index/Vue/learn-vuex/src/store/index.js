import Vue from 'vue'
import Vuex from 'vuex'

// 1. 安装插件
Vue.use(Vuex)

// 2. 创建对象

const store = new Vuex.Store({
	state: {
		num:1000,
	}
})

// 3. 导出store组件
export default store