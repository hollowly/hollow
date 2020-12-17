<!--  -->
<template>
	<div>
		<router-link to='/home'>主页</router-link>
		<router-link to='/about'>关于</router-link>
		<router-link to='/profile'>我的</router-link>

		<router-view />
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	},

}

</script>

<style scoped>

</style>