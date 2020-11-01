<template>
  <div id="app">
		<h1>{{name}}</h1>
<hr>
		<h1><router-link to='/basic'>vue的基本用法：</router-link></h1>
		<h1><router-link to='/v-bind'>v-bind的使用：</router-link></h1>
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
	a {
		text-decoration: none;
	}
</style>