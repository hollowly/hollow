<!--  -->
<template>
	<div class="tab-bar-item" @click='btnClick'>
		<div v-if='getIsactive'>
			<slot name='item-icon'></slot>
		</div>

		<div v-else>
			<slot name='item-icon-active'></slot>
		</div>
		
		<div :style="getStyle"><slot name='item-text'></slot></div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			// isactive:true,
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
		btnClick(){
			this.$router.replace(this.path)
		}
	},
	computed: {
		getIsactive() {
			return this.$route.path.indexOf(this.path)
		},
		getStyle() {
			return this.getIsactive ? {} : {'color':this.activeColor}
		}
	},

}

</script>

<style>
	.tab-bar-item {
		background: #f3f3f3f3;
		flex: 1;
		height: 49px;
		text-align: center;
		font-size: 14px;
	}
	.tab-bar-item img {
		width: 24px;
		height: 24px;
	}
</style>