<!--  -->
<template>
	<div class='tabbar-item' @click='tabbaritemClick'>
			<div v-if='isActive'>
				<slot name='item-lcon'></slot>
			</div>
			<div v-else>
				<slot name='item-lcon-active'></slot>
			</div>
			<div :style='activeStyle'><slot name='item-text'></slot></div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			// isactive:true
		}
	},
	computed: {
		isActive() {
			return this.$route.path.indexOf(this.path);
		},
		activeStyle() {
			return this.isActive ? {} : {color:this.activeColor}
		}
	},
	props: {
		path:String,
		activeColor: {
			type:String,
			default:'red',
		}
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
</style>