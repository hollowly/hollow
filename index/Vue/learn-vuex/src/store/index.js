
import Vue from 'vue'
import Vuex from 'vuex'

// 1. 安装插件
Vue.use(Vuex)

// 2. 创建对象
	// Store：单一状态树
const store = new Vuex.Store({
	// state：放一些基本的信息,和data类似
	state: {
		num:1000,
		student: [
			{id:193001, name:"hollow", age:18},
			{id:193002, name:"query", age:19},
			{id:193003, name:"boby", age:24},
			{id:193004, name:"james", age:28},
			{id:193005, name:"tom", age:36},
		],
		info: {name:'koby',age:40,height:1.98}
	},
	// 修改状态
	mutations: {
		add(state) {
			state.num++
		},
		sub(state) {
			state.num--
		},
		addCount(state, payload) {
			// 普通封装提交
			// state.num += count;
			// 特殊封装提交
			state.num += payload.count
		},
		addStudent(state, stu) {
			state.student.push(stu)
		},
		updataInfo(state) {
			// state.info['address'] = '洛杉矶'
			// Vue.set才能将添加的数据添加到响应式系统中，而上面的确不会
			Vue.set(state.info, 'address','洛杉矶')
			// 删除同理
			// Vue.delete(state.info, 'age');
		}
	},
	// getters:(计算属性) 和 computed 类似
	getters: {
		power(state) {
			return state.num * state.num * 2
		},
		more20Stu(state) {
			return state.student.filter(s => s.age > 20)
		},
		more20StuLength(state, getters) {
			return getters.more20Stu.length
		},
		moreAgeStu(state) {
			return age => {
				return state.student.filter(s => s.age > age)
			}
		}
	}

})

// 3. 导出store组件
export default store