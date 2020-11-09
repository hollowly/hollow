export default {
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