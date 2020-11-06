<!--  -->
<template>
	<div class='TabBarItem' @click='itemClick'>
		<slot name='item-icon' v-if='isActive'></slot>
		<slot name='item-icon-active' v-else></slot>
		<div :style="getStyle"><slot name='item-text'></slot></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
		}
	},
	props: {
		path:String,
	},
	computed: {
		isActive() {
			return this.$route.path.indexOf(this.path)
		},
		getStyle() {
			return this.isActive ? {} : {'color':'red'}
		}
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