<template>
  <div id="app">
		<span class='hollow'>{{name}}</span>
<hr>
		<h1><router-link to='/basic'>vue</router-link></h1>
		<h1><router-link to='/v-bind'>v-bind</router-link></h1>
		<h1><router-link to='/v-ifANDv-for'>v-if and v-for</router-link></h1>
		<h1><router-link to='/ShoppingCart'>ShoppingCart</router-link></h1>
		<h1><router-link to='/v-model'>v-model</router-link></h1>
		<h1><router-link to='/parent-child-components'>parent and child components</router-link></h1>
		
		<hr>
		<router-view></router-view>
  </div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			name:'hollow-learn-vue',
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
	body{
		height: 100000px;
	}
</style>