<!--  -->
<template>
	<div>
		<div id='tab-bar'>
			<div class="tab-bar-item">首页</div>
			<div class="tab-bar-item">内容</div>
			<div class="tab-bar-item">购物车</div>
			<div class="tab-bar-item">其他</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	},

}

</script>

<style>
	#tab-bar {
		display: flex;
		text-align: center;
		height: 49px;
		background: #f9f9f9f9;
		line-height: 49px;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		box-shadow: 1px -1px 1px rgba(100, 100, 100, 0.2);
	}
	.tab-bar-item {
		flex: 1;
	}
</style>