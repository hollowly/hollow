<!--  -->
<template>
	<div id='tabbar'>
		<slot>
			<tabbarItem path='/home'>
				<img src="../../assets/img/tabbar/home_active.png" slot='item-icon-active'>
				<img src="../../assets/img/tabbar/home.png" slot='item-icon'>
				<div slot="item-text">首页</div>
			</tabbarItem>

			<tabbarItem path='/categories'>
				<img src="../../assets/img/tabbar/categories_active.png" slot='item-icon-active'>
				<img src="../../assets/img/tabbar/categories.png" slot='item-icon'>
				<div slot="item-text">更多</div>
			</tabbarItem>

			<tabbarItem path='/shopcart'>
				<img src="../../assets/img/tabbar/shopcart_active.png" slot='item-icon-active'>
				<img src="../../assets/img/tabbar/shopcart.png" slot='item-icon'>
				<div slot="item-text">购物车</div>
			</tabbarItem>
			
			<tabbarItem path='/profile'>
				<img src="../../assets/img/tabbar/profile_active.png" slot='item-icon-active'>
				<img src="../../assets/img/tabbar/profile.png" slot='item-icon'>
				<div slot="item-text">我的</div>
			</tabbarItem>
		</slot>
	</div>
</template>

<script>
import tabbarItem from './tabbar-item'
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