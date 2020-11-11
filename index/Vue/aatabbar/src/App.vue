<template>
  <div id="app">
		<tabbar>
			<tabbaritem path='/home'>
				<img src="./assets/img/TabBar/home.png" slot='item-icon'>
				<div slot='item-text'>首页</div>
			</tabbaritem>
			<tabbaritem path='/categories'>
				<img src="./assets/img/TabBar/categories.png" slot='item-icon'>
				<div slot='item-text'>更多</div>
			</tabbaritem>
			<tabbaritem path='/shopcart'>
				<img src="./assets/img/TabBar/shopcart.png" slot='item-icon'>
				<div slot='item-text'>购物车</div>
			</tabbaritem>
			<tabbaritem path='/profile'>
				<img src="./assets/img/TabBar/profile.png" slot='item-icon'>
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
 @import url('./assets/css/base.css');
</style>
