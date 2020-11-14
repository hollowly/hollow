<!--  -->
<template>
	<div class='tabbaritem' @click='itemClick'>
		<div v-if='isActive'><slot name='item-icon'></slot></div>
		<div v-else><slot name='item-icon-active'></slot></div>
		<div :style="getStyle"><slot name='item-text'></slot></div>
	</div>
</template>

<script>
export default {
	props: {
		path: String,
		getColor: {
			type:String,
			default:'red'
		}
	},
	computed: {
		isActive() {
			return this.$route.path.indexOf(this.path)
		},
		getStyle() {
			return this.isActive ? {} : {'color':this.getColor}
		}
	},
	methods: {
		itemClick() {
			this.$router.push(this.path)
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