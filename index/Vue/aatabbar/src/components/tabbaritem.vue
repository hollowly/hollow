<!--  -->
<template>
	<div class='tabbaritem' @click='tabbaritemClick'>
		<slot name='item-icon' v-if='isactive'></slot>
		<slot name='item-icon-active' v-else></slot>
		<slot name='item-text'></slot>
	</div>
</template>

<script>
export default {
	props: {
		path:String,
	},
	methods: {
		tabbaritemClick() {
			this.$router.push(this.path)
		}
	},
	computed: {
		isactive() {
			return this.$router.indexOf(this.path)
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