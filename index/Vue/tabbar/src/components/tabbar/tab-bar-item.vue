<!--  -->
<template>
	<div class="tab-bar-item">
		<div v-if='!isactive'>
			<slot name='item-icon'></slot>
		</div>
		<div v-else>
			<slot name='item-icon-active'></slot>
		</div>
		<div :class="{active:isactive}"><slot name='item-text'></slot></div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			isactive:true,
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

	.active {
		color: red;
	}
	
</style>