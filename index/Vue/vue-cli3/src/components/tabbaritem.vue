<!--  -->
<template>
	<div class='tabbaritem'>
		<slot name='item-icon'></slot>
		<slot name='item-text'></slot>
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
		height: 49px;
		background: #f1f1f1f1;
		flex: 1;
		text-align: center;
		box-shadow: 0px -1px 0px rgb(0, 0, 0,0.2);
	}

	.tabbaritem img {
		width: 24px;
		height: 24px;
		vertical-align: middle;
		margin-top: 2px;
		margin-bottom: 1px;
	}
</style>