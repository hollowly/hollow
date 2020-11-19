<!--  -->
<template>
	<div class="tabbar-item" @click='itemClick'>
		<div v-if='isactive'><slot name='item-icon'></slot></div>
		<div v-else><slot name='item-icon-active'></slot></div>
		<div :style='getstyle'><slot name='item-text'></slot></div>
	</div>
</template>

<script>
export default {
	props: {
		path:String,
	},
	computed: {
		isactive() {
			return this.$route.path.indexOf(this.path)
		},
		getstyle() {
			return this.isactive ? {} : {'color':'red'}
		}
	},
	methods: {
		itemClick() {
			this.$router.replace(this.path)
		}
	}
}

</script>

<style>
	.tabbar-item {
		flex: 1;
		text-align: center;
		font-size: 13px;
	}
	.tabbar-item  img {
		margin-top: 5px;
		width: 25px;
	}
</style>