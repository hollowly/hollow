import {add, sub, addCount, addStudent} from './mutations-types'
import Vue from 'vue'
export default {
	[add](state) {
		state.num++
	},
	[sub](state) {
		state.num--
	},
	[addCount](state, payload) {
		// 普通封装提交
		// state.num += count;
		// 特殊封装提交
		state.num += payload.count
	},
	[addStudent](state, stu) {
		state.student.push(stu)
	},
	updataInfo(state) {
		// state.info['address'] = '洛杉矶'
		// Vue.set才能将添加的数据添加到响应式系统中，而上面的确不会
		Vue.set(state.info, 'address','洛杉矶')
		// 删除同理
		// Vue.delete(state.info, 'age');
	},
	updataBooks(state) {
		state.books.push('git','github','gitee')
	}
}