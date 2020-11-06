<!--  -->
<template>
	<div class='tabbar-item'>
			<slot name='item-lcon'></slot>
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
	.tabbar-item {
		text-align: center;
		flex: 1;
		height: 49px;
		font-size: 14px;
		background: #f9f9f9f9;
	}
	.tabbar-item img {
		width: 24px;
		height: 24px;
	}
</style>