<!--  -->
<template>
	<tabbar>
		<tabbaritem path='/home' activeColor='blue'>
			<img src="./assets/img/tabbar/home.png" slot='item-lcon'>
			<img src="./assets/img/tabbar/home_active.png" slot='item-lcon-active'>
			<div slot='item-text'>首页</div>
		</tabbaritem>
		<tabbaritem path='/categories' activeColor='green'>
			<img src="./assets/img/tabbar/categories.png" slot='item-lcon'>
			<img src="./assets/img/tabbar/categories_active.png" slot='item-lcon-active'>
			<div slot='item-text'>更多</div>
		</tabbaritem>
		<tabbaritem path='/shopcart' activeColor='purple'>
			<img src="./assets/img/tabbar/shopcart.png" slot='item-lcon'>
			<img src="./assets/img/tabbar/shopcart_active.png" slot='item-lcon-active'>
			<div slot='item-text'>购物车</div>
		</tabbaritem>
		<tabbaritem path='/profile' activeColor='orange'>
			<img src="./assets/img/tabbar/profile.png" slot='item-lcon'>
			<img src="./assets/img/tabbar/profile_active.png" slot='item-lcon-active'>
			<div slot='item-text'>我的</div>
		</tabbaritem>
	</tabbar>
</template>

<script>
import tabbar from './components/tabbar/tabbar'
import tabbaritem from './components/tabbar/tabbaritem'

export default {
	components: {
		tabbar,
		tabbaritem,
	}
}

</script>

<style>

</style>