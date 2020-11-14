<!--  -->
<template>
	<div id='profile'>
		<h1>我是profile组件</h1>
		<h2>我是profile内容，嘻嘻嘻</h2>
		<h2>{{$route.query}}</h2>
		<h2>你的名字叫：{{$route.query.name}}</h2>
		<h2>你今年：{{$route.query.age}}岁</h2>
		<h2>你现在：{{$route.query.height}}m</h2>
		<h2><button @click='btnclick'>按钮</button></h2>
	</div>
</template>

<script>
export default {
	name:'profile',
	data () {
		return {

		}
	},
	created() {
		console.log('profile created');
	},
	destroyed() {
		console.log('profile destroyed');
	},
	methods: {
		btnclick() {
			console.log(this.name);
		}
	},

}

</script>

<style>
#profile {
	background: skyblue;
}
</style>