<!--  -->
<template>
	<div>
		<h1>欢迎这是主页.</h1>
		<router-link to="/login">点我登录</router-link>

		<div>当前登录人：{{ cookiename }}</div>
		<div><button @click.prevent='exit()'>退出登录</button></div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			cookiename: null,
			cookiepwd: null,
		}
	},
	methods: {
		exit() {
			// 调用this.cookie.clearCookie方法删除cookie
			this.cookie.clearCookie('loginname')
			this.cookie.clearCookie('openId')
			// 跳转到主页面
			this.$router.replace('/login')
		}
	},
	mounted() {
		this.cookiename = this.cookie.getCookie('loginname')
	}

}

</script>

<style scoped>
</style>