<template>
  <div id="app">
		<tabbar>
			<tabbaritem path='/home' getColor='blue'>
				<img src="./assets/img/tabbar/home.png" slot='item-icon'>
				<img src="./assets/img/tabbar/home_active.png" slot='item-icon-active'>
				<div slot='item-text'>首页</div>
			</tabbaritem>

			<tabbaritem path='/categories' getColor='orange'>
				<img src="./assets/img/tabbar/categories.png" slot='item-icon'>
				<img src="./assets/img/tabbar/categories_active.png" slot='item-icon-active'>
				<div slot='item-text'>更多</div>
			</tabbaritem>

			<tabbaritem path='/shopcart' getColor='cyan'>
				<img src="./assets/img/tabbar/shopcart.png" slot='item-icon'>
				<img src="./assets/img/tabbar/shopcart_active.png" slot='item-icon-active'>
				<div slot='item-text'>购物车</div>
			</tabbaritem>

			<tabbaritem path='/profile' getColor='green'>
				<img src="./assets/img/tabbar/profile.png" slot='item-icon'>
				<img src="./assets/img/tabbar/profile_active.png" slot='item-icon-active'>
				<div slot='item-text'>我的</div>
			</tabbaritem>
		</tabbar>

		<router-view></router-view>
  </div>
</template>

<script>
import tabbar from './components/tabbar'
import tabbaritem from './components/tabbaritem'

export default {
	name: 'App',


	components: {
		tabbar,
		tabbaritem
	}
	
}
</script>

<style>
@import url('/assets/css/base.css');
</style>
