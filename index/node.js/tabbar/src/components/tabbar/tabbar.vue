<!--  -->
<template>
	<div id='tabbar'>
		<slot>
			<tabbarItem>
				<img src="../../assets/img/tabbar/home.png" slot='item-icon'>
				<div slot="item-text">首页</div>
			</tabbarItem>

			<tabbarItem>
				<img src="../../assets/img/tabbar/categories.png" slot='item-icon'>
				<div slot="item-text">更多</div>
			</tabbarItem>

			<tabbarItem>
				<img src="../../assets/img/tabbar/shopcart.png" slot='item-icon'>
				<div slot="item-text">购物车</div>
			</tabbarItem>
			
			<tabbarItem>
				<img src="../../assets/img/tabbar/profile.png" slot='item-icon'>
				<div slot="item-text">我的</div>
			</tabbarItem>
		</slot>
	</div>
</template>

<script>
import tabbarItem from './tabbar-item.vue'
export default {
	data () {
		return {

		}
	},
	components: {
		tabbarItem
	}
}

</script>

<style>
	#tabbar {
		position: fixed;
		display: flex;
		bottom: 0;
		left: 0;
		right: 0;
		height: 49px;
		background: #f2f2f2;
	}
	
</style>