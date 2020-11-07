<!--  -->
<template>
	<div>
		<h1>cpn</h1>
		<button @click='btnClick'>按钮</button>
	</div>
</template>

<script>
export default {
	props: {
		path:{
			type:String,
			default:'/default'
		}
	},
	methods: {
		btnClick() {
			console.log(this.path);
		}
	},

}

</script>

<style>

</style>