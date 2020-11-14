<!--  -->
<template>
	 <div id='cpn1'>
		 <h1>我是主页：</h1>
		 <h2>我是主页内容，哈哈哈</h2>
		 <router-link to='/home/news'>新闻</router-link>
		 <router-link to='/home/message'>消息</router-link>
			<!-- <keep-alive> -->
				<router-view></router-view>
			<!-- </keep-alive> -->
	 </div>
</template>

<script>
export default {
	data () {
		return {
			path:'/home/news'
		}
	},
	// 组件被渲染时执行 created 函数
	created() {
		console.log("home created")
	},
	// 组件被销毁前执行 destroyed 函数
	destroyed() {
		console.log('home destroyed')
	},
	// 这两个函数只有该组件使用了keep-alive，才是有效的
	// 组件被切换前执行 activated 函数(进入活跃状态时调用)
	activated() {
		console.log('home activated')
		this.$router.push(this.path);
	},
	// 组件被切换后执行 deactivated 函数(不是活跃状态时调用)
	deactivated() {
		console.log('home deactivated')
	},

	beforeRouteLeave (to, from, next) {
		// console.log(this.$route.path);
		this.path = this.$route.path;
		next()
	}
}

</script>

<style>
#cpn1 {
	background: pink;
}
</style>