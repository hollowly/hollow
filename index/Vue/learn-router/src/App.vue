<template>
  <div>
		<h1>我是App组件</h1>
		<!-- <h2><router-link to='cpn1' tag="button" replace>cpn1</router-link></h2>
		<h2><router-link to='cpn2' tag='button' replace>cpn2</router-link></h2> -->
		<!-- <button @click='cpn1Click'>cpn1</button>
		<button @click='cpn2Click'>cpn2</button> -->

		<router-link to='/home'>主页</router-link>
		<router-link to='/about'>关于</router-link>
		<router-link :to="'/user/'+userId">我的</router-link>
		<router-view></router-view>
		<h1>hello world</h1>
  </div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			userId:'dengjunxian'
		}
	},
	methods: {
		cpn1Click() {
			// this.$router.push('/home');
			this.$router.replace('/home');
		},
		cpn2Click() {
			// this.$router.push('/about');
			this.$router.replace('/about');
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
}
</style>
