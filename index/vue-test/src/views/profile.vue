<!--  -->
<template>
	<div>
		<div id='profile'>
			<div>
				<h2>菜单</h2>
				<ul>
					<li><a href="季度精选">季度精选</a></li>
					<li><a href="饮料">饮料</a></li>
					<li><a href="美食">美食</a></li>
					<li><a href="咖啡产品">咖啡产品</a></li>
					<li><a href="商品">商品</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	},

}

</script>

<style scoped>
	#profile {
		border:1px solid yellow;
		position: absolute;
		top: 40%;
	}
	#profile > div {
		border:1px solid red;
	}
</style>