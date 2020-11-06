<template>
  <div id="app">
		<tab-bar>
			<tab-bar-item path='/home'>
				<img src="./assets/img/TabBar/home.png" slot='item-icon'>
				<img src="./assets/img/TabBar/home_active.png" slot='item-icon-active'>
				<div slot='item-text'>首页</div>
			</tab-bar-item>

			<tab-bar-item path='/categories'>
				<img src="./assets/img/TabBar/categories.png" slot='item-icon'>
				<img src="./assets/img/TabBar/categories_active.png" slot='item-icon-active'>
				<div slot='item-text'>更多</div>
			</tab-bar-item>

			<tab-bar-item path='/shopcart'>
				<img src="./assets/img/TabBar/shopcart.png" slot='item-icon'>
				<img src="./assets/img/TabBar/shopcart_active.png" slot='item-icon-active'>
				<div slot='item-text'>购物车</div>
			</tab-bar-item>

			<tab-bar-item path='/profile'>
				<img src="./assets/img/TabBar/profile.png" slot='item-icon'>
				<img src="./assets/img/TabBar/profile_active.png" slot='item-icon-active'>
				<div slot='item-text'>我的</div>
			</tab-bar-item>
		</tab-bar>

		<router-view></router-view>
  </div>
</template>

<script>

import TabBar from './components/TabBar/TabBar'
import TabBarItem from './components/TabBar/TabBarItem'
export default {
	name: 'App',
	components: {
		TabBar,
		TabBarItem

	}
}
</script>

<style>
	@import url('./assets/css/base.css');
</style>
