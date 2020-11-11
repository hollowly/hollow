<!--  -->
<template>
	<div class='tabbaritem' @click='tabbaritemClick'>
		<slot name='item-icon'></slot>
		<slot name='item-text'></slot>
	</div>
</template>

<script>
export default {
	props: {
		path:Array,
	},
	methods: {
		tabbaritemClick() {
			this.$router.indexOf(this.path)
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
	.tabbaritem  img {
		width: 24px;
		vertical-align: middle;
		margin-top: 1px;
		margin-bottom: 4px;
	}
</style>