<!--  -->
<template>
	<div id='tabbar'>
		<router-link to='/categories'>
			<div class="tabbar-item active">
				<img src="../assets/img/tabbar/categories.png">
				<img src="../assets/img/tabbar/categories_active.png" style="display:none">
				<p>首页</p>
			</div>
		</router-link>
		
		<router-link to='/shopcart'>
		<div class="tabbar-item">
			<img src="../assets/img/tabbar/shopcart.png">
			<img src="../assets/img/tabbar/shopcart_active.png" style="display:none">
			<p>购物车</p>
		</div>
		</router-link>

		<router-link to='/home'>
		<div class="tabbar-item">
			<img src="../assets/img/tabbar/home.png">
			<img src="../assets/img/tabbar/home_active.png" style="display:none">
			<p>关于</p>
		</div>
		</router-link>

		<router-link to='/profile'>
		<div class="tabbar-item">
			<img src="../assets/img/tabbar/profile.png">
			<img src="../assets/img/tabbar/profile_active.png" style="display:none">
			<p>我的</p>
		</div>
		</router-link>
	</div>
</template>

<script>
import $ from 'jquery'
export default {
	data () {
		return {

		}
	},
	// mounted：渲染后
	mounted() {
		$(function() {
			$('.tabbar-item').click(function() {
				$('.tabbar-item').removeClass('active');
				$(this).addClass('active')

				$(this).children('img').eq(0).hide().siblings('img').toggleClass();
			})
		})
	},

}

</script>

<style scoped>
	#tabbar {
		position: fixed;
		display:flex;
		right: 0;
		left: 0;
		bottom: 0;
		height: 49px;	
		background: #eee;
	}
	a {
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
	.hidden {
		display: none;
	}
</style>