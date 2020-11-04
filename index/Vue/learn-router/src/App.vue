<template>
  <div>
		<h1>我是App组件</h1>
		<router-link to='/home'>主页</router-link>
		<router-link to='/about'>关于</router-link>
		<router-link :to="'/user/'+userId">我的</router-link>
		<router-link :to="{path:'/profile',query:{name:'hollow',age:18,height:1.88}}">档案</router-link>
		<button @click='userClick'>用户</button>
		<button @click='profileClick'>档案</button>
		<router-view></router-view>
  </div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			userId: 'djx'
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
		},
		userClick() {
			this.$router.replace('/user/'+this.userId);
		},
		profileClick() {
			this.$router.replace(
				{
					path:'/profile',
					query: {
						name:'hollow',
						age:18,
						height:1.88
					}
				}
			)
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
</style>
