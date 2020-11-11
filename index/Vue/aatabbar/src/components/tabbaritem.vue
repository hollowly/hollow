<!--  -->
<template>
	<div class='tabbaritem'>
		<slot></slot>
		<slot></slot>
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
	.tabbaritem {
		flex: 1;
		text-align: center;
		height: 49px;
		background: #f2f2f2f2;
		float: left;
	}
</style>