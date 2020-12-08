o<template>
  <div id="app">
		<div id='tabbar'>
			<div class="tabbar-item">
				首页
				<img src="./assets/img/tabbar/categories.png">
				</div>
			<div class="tabbar-item">
				购物车
				<img src="./assets/img/tabbar/shopcart.png">
				</div>
			<div class="tabbar-item">
				关于
				<img src="./assets/img/tabbar/home.png">
				</div>
			<div class="tabbar-item">
				我的
				<img src="./assets/img/tabbar/profile.png">
				</div>
		</div>
  </div>
</template>

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
		
	}
</style>
