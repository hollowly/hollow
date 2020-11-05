<!--  -->
<template>
	<div>
		<tabbar>
			<tabbaritem>
				<img src='./assets/img/tabbar/home.png' slot='item-icon'>
				<div slot='item-text'>首页</div>
			</tabbaritem>

			<tabbaritem>
				<img src='./assets/img/tabbar/categories.png' slot='item-icon'>
				<div slot='item-text'>分类</div>
				</tabbaritem>

			<tabbaritem>
				<img src='./assets/img/tabbar/shopcart.png' slot='item-icon'>
				<div slot='item-text'>购物车</div>
				</tabbaritem>
				
			<tabbaritem>
				<img src='./assets/img/tabbar/profile.png' slot='item-icon'>
				<div slot='item-text'>我的</div>
				</tabbaritem>
		</tabbar>
	</div>
</template>

<script>
import tabbar from './components/tabbar/tabbar'
import tabbaritem from './components/tabbar/tabbaritem'
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