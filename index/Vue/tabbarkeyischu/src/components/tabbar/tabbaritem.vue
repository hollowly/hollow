<!--  -->
<template>
	<div class='tabbar-item' @click='tabbaritemClick'>
			<div v-if='!isactive'>
				<slot name='item-lcon'></slot>
			</div>

			<div v-else>
				<slot name='item-lcon-active'></slot>
			</div>

			<div :class="{active:isactive}"><slot name='item-text'></slot></div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			isactive:true
		}
	},
	props: {
		path:String,
	},
	methods: {
		tabbaritemClick() {
			this.$router.push(this.path)
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
	.active {
		color: red;
	}
</style>