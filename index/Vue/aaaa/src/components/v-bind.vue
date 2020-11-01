<!--  -->
<template>
	<div>
		<h2><a v-bind:href="url">我的博客：</a></h2>
		<img :src="imgUrl" width="300">
		
	</div>
</template>

<script>
export default {
	data () {
		return {
			url: 'https://www.cnblogs.com/hollows/',
			imgUrl: 'https://images.cnblogs.com/cnblogs_com/ache/1644357/o_20022410503214.jpg'
		}
	},

}

</script>

<style>

</style>