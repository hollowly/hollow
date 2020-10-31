<template>
  <div id="app">
		<h1>我是app组件</h1>
		<router-link to='/home'>首页</router-link>
		<router-link to='/about'>关于</router-link>
		<router-view></router-view>
  </div>
</template>

<script>
export default {
	name: 'App',
}
</script>

<style>

</style>
