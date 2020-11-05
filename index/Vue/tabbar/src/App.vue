<!--  -->
<template>
	<div>
		<tabbar>
			<tabbaritem>
				<img src="./assets/img/tabbar/home.png" slot='item-icon'>
				<img src="./assets/img/tabbar/home_active.png" slot='item-icon-active'>
				<div slot='item-text'>首页</div>
			</tabbaritem>
			<tabbaritem>
				<img src="./assets/img/tabbar/categories.png" alt="" slot='item-icon'>
				<img src="./assets/img/tabbar/categories_active.png" slot='item-icon-active'>
				<div slot='item-text'>更多</div>
			</tabbaritem>
			<tabbaritem>
				<img src="./assets/img/tabbar/shopcart.png" alt="" slot='item-icon'>
				<img src="./assets/img/tabbar/shopcart_active.png" slot='item-icon-active'>
				<div slot='item-text'>购物车</div>
				</tabbaritem>
			<tabbaritem>
				<img src="./assets/img/tabbar/profile.png" alt="" slot='item-icon'>
				<img src="./assets/img/tabbar/profile_active.png" slot='item-icon-active'>
				<div slot='item-text'>我的</div>
				</tabbaritem>

		</tabbar>
	</div>
</template>

<script>
import tabbar from './components/tabbar/tab-bar'
import tabbaritem from './components/tabbar/tab-bar-item'
export default {
	data () {
		return {

		}
	},
	components: {
		tabbar,
		tabbaritem
	}

}

</script>

<style>
	@import url('./assets/css/base.css');
</style>