<template>
  <div id="app">
		<h2>----------------App内容：modules相关内容----------------</h2>
		<h2>{{$store.state.a.name}}</h2>
		<button @click='updateName'>mutations修改名字</button>
		<h2>{{$store.getters.fullName}}</h2>
		<h2>{{$store.getters.fullName2}}</h2>
		<h2>{{$store.getters.fullName3}}</h2>
		<button @click='asyncUpdataName'>异步修改名字</button>


		<h2>----------------App内容----------------</h2>
		<h3>{{$store.state.num}}</h3>
		<button @click='addClick'>+</button>
		<button @click='subClick'>-</button>

		<h2>----------------App内容：getters相关信息----------------</h2>
		<h2>{{$store.getters.power}}</h2>	
		<h5>大于20岁的学生信息：{{$store.getters.more20Stu}}</h5>
		<h2>大于20岁的学生人数：{{$store.getters.more20StuLength}}</h2>
		<h3>{{$store.getters.moreAgeStu(30)}}</h3>

		<h2>----------------mutations内的数据响应原理----------------</h2>
		<h2>{{$store.state.info}}</h2>
		<button @click='addData'>添加数据</button>

		<h2>----------------App内容：mutations相关信息----------------</h2>
		<button @click='addCount(5)'>+5</button>
		<button @click='addCount(10)'>+10</button>
		<button @click='addStudent'>添加学生</button>



		<h2>----------------cpn1内容----------------</h2>
	<cpn1></cpn1>
  </div>
</template>

<script>
import cpn1 from './components/cpn1'
import {add, sub, addCount, addStudent} from './store/mutations-types'

export default {
	name: 'App',
	components: {
		cpn1
	},
	methods: {
		addClick() {
			this.$store.commit(add)
		},
		subClick() {
			this.$store.commit(sub)
		},
		addCount(count) {
			// 普通的提交封装
			// this.$store.commit(addCount, count);

			// 特殊的提交封装
			this.$store.commit({
				type:'addCount',
				count
			})
		},
		addStudent() {
			let stu = {id:'193006', name:'alean', age:35}
			this.$store.commit(addStudent,stu)
		},
		addData() {
			// this.$store.commit('updataInfo')
			// this.$store.dispatch('aupdataInfo',{
			// 	// 同时传入字符串和函数
			// 	message:"我是携带的信息",
			// 	aaa:() => {
			// 		console.log('里面已经完成了')
			// 	}
			// })

			this.$store.dispatch('aupdataInfo','我是携带的信息')
			.then(res => {
				console.log('里面已经完成了');
				console.log(res);
			})
		},
		
		updateName() {
			this.$store.commit('updateName','lishi')
		},
		asyncUpdataName() {
			this.$store.dispatch('aupdataName');
		}

	},
}
</script>

<style>


</style>
