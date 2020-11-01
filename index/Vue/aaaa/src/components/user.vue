<!--  -->
<template>
	<div id='user'>
		<h1>{{name}}</h1>
		<h3>我是用户内容，呵呵呵</h3>
	</div>
</template>

<script>
export default {
	data () {
		return {
			name:'我是用户'
		}
	},

}

</script>

<style>
#user {
	background: blanchedalmond;
}
.active {
	background: pink;
	border: 1px solid pink;
	outline: none;
}
</style>