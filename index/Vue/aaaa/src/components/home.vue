<!--  -->
<template>
	<div id='home'>
		<h1>{{name}}</h1>
		<h3>我是首页内容，哈哈哈</h3>
		<router-link to='/home/news'>新闻</router-link>
		<router-link to='/home/message'>消息</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data () {
		return {
			name:'我是主页'
		}
	},

}

</script>

<style>
#home {
	background: pink;
}
.active {
	background: pink;
	border: 1px solid pink;
	outline: none;
}
</style>