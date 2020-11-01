<!--  -->
<template>
	<div id='cpn3'>
		<h1>我是我的</h1>
		<h2>我是我的内容，嘿嘿嘿</h2>
		当前用户是：{{userId}}
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	},
	computed: {
		userId() {
			return this.$route.params.userId
		}
	}

}

</script>

<style>
	#cpn3 {
		background: greenyellow;
	}
</style>