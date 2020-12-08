o<template>
  <div id="app">
		<div id='tabbar'>
			<router-link to='/categories'>
				<div class="tabbar-item active">
					<img src="./assets/img/tabbar/categories.png">
					<p>首页</p>
				</div>
			</router-link>
			
			<router-link to='/shopcart'>
			<div class="tabbar-item">
				<img src="./assets/img/tabbar/shopcart.png">
				<p>购物车</p>
			</div>
			</router-link>

			<router-link to='/home'>
			<div class="tabbar-item">
				<img src="./assets/img/tabbar/home.png">
				<p>关于</p>
			</div>
			</router-link>

			<router-link to='/profile'>
			<div class="tabbar-item">
				<img src="./assets/img/tabbar/profile.png">
				<p>我的</p>
			</div>
			</router-link>

		</div>

		<router-view />
  </div>
</template>

<script>
import $ from 'jquery'

export default {
	// mounted：渲染后
	mounted() {
		$(function() {
			$('.tabbar-item').click(function() {
				$('.tabbar-item').removeClass('active');
				$(this).addClass('active')
			})
		})
	},

}
</script>
<style>
	@import url("./assets/css/base.css");
	#tabbar {
		position: fixed;
		display:flex;
		right: 0;
		left: 0;
		bottom: 0;
		height: 49px;	
		background: #eee;
	}
	.tabbar-item {
		flex: 1;
		text-align: center;
	}
	.tabbar-item > img {
		width: 25px;
		height: 25px;
		border-radius: 25px;
	}

	.active {
		color: red;
	}
</style>
