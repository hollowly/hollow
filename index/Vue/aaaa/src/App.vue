<template>
  <div id="app">
		<h1>{{name}}</h1>
		<router-link to='/home' tag='button' replace>主页</router-link>
		<router-link to='/about' tag='button' replace>关于</router-link>
		<router-link to='/user' tag='button' replace>我的</router-link>
		<router-view></router-view>
  </div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			name:'我是app组件标题'
		}
	},
}
</script>

<style>

</style>
