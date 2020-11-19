<!--  -->
<template>
	<div class="tabbar-item">
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
	.tabbar-item {
		flex: 1;
		text-align: center;
		font-size: 13px;
	}
	.tabbar-item > img {
		margin-top: 5px;
		width: 25px;
	}
</style>