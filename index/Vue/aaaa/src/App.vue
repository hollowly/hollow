<template>
  <div id="app">
		<span class='hollow'>{{name}}</span>
<hr>
		<h1 class='float'><router-link to='/basic'>vue的基本用法：</router-link></h1>
		<h1 class='float'><router-link to='/v-bind'>v-bind的使用：</router-link></h1>
		<hr>
		<router-view></router-view>
  </div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			name:'hollow-learn-vue'
		}
	},
}
</script>
<style>
.hollow {
	display: block;
	text-align: center;
	font-size: 50px;
	text-shadow: 1px 1px 4px blue;
}
	a {
		color: red;
	}
</style>