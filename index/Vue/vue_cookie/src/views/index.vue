<!--  -->
<template>
	<div>
		<h1>欢迎这是主页.</h1>
		<router-link to="/login">点我登录</router-link>

		<div>当前登录人：{{ cookiename }}</div>
		<div>退出登录</div>
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
	mounted() {
		this.cookiename = this.cookie.getCookie('loginname')
	}

}

</script>

<style scoped>
</style>