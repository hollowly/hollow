<!--  -->
<template>
	<div id='cpn3'>
		<h1>我是用户：</h1>
		<h2>我是用户内容，嘿嘿嘿</h2>
		<h2>当前用户：{{$route.params.id}}</h2>
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

<style>
	#cpn3 {
		background: greenyellow;
	}
</style>