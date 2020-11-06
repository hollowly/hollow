<!--  -->
<template>
	<div class='TabBarItem' @click='itemClick'>
		<slot name='item-icon'></slot>
		<slot name='item-text'></slot>
	</div>
</template>

<script>
export default {
	props: {
		path:String,
	},
	methods: {
		itemClick() {
			this.$router.push(this.path);
		}
	},

}

</script>

<style>
	.TabBarItem {
		flex: 1;
		height: 49px;
		background: #f2f2f2f2;
		text-align: center;
		font-size: 14px;
	}
	.TabBarItem img {
		width: 24px;
		height: 24px;
		vertical-align: middle;
		margin-top: 1px;
		margin-bottom: 2px;
	}
</style>