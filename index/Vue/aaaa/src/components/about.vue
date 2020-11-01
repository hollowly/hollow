<!--  -->
<template>
	<div id='about'>
		<h1>{{name}}</h1>
		<h3>我是关于内容，嘿嘿嘿</h3>
	</div>
</template>

<script>
export default {
	data () {
		return {
			name:'我是关于'
		}
	},

}

</script>

<style>
#about {
	background: greenyellow;
}
.active {
	background: pink;
	border: 1px solid pink;
	outline: none;
}
</style>