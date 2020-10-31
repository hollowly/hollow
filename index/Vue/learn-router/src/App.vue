<template>
  <div>
		<h1>我是App组件</h1>
		<h2><router-link to='cpn1'>cpn1</router-link></h2>
		<h2><router-link to='cpn2'>cpn2</router-link></h2>
		<router-view></router-view>
		<h1>hello world</h1>
  </div>
</template>

<script>
export default {
	name: 'App',
}
</script>

<style>
body {
	background: url('./img/10.jpg');
	background-position: center 0%;
}
</style>
