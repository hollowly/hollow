<template>
  <div>
		<h1>我是App组件</h1>
		<!-- <h2><router-link to='cpn1' tag="button" replace>cpn1</router-link></h2>
		<h2><router-link to='cpn2' tag='button' replace>cpn2</router-link></h2> -->
		<button @click='cpn1Click'>cpn1</button>
		<button @click='cpn2Click'>cpn2</button>
		<router-view></router-view>
		<h1>hello world</h1>
  </div>
</template>

<script>
export default {
	name: 'App',
	methods: {
		cpn1Click() {
			this.$router.push('/cpn1');
		},
		cpn2Click() {
			this.$router.push('/cpn2');
		}
	},
}
</script>

<style>
body {
	background: url('./img/10.jpg');
	background-position: center 0%;
}
button {
	background: pink;
	border: none;
	outline: none;
	cursor:pointer;
	width: 100px;
	height: 30px;
}
 .active {
	 color: #FF0000;
	 border: 1px solid red;
}
</style>
