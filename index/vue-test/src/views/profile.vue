<!--  -->
<template>
	<div>
		<div id='profile'>
			<div>
				<h2>菜单</h2>
				<ul>
					<li><a href="">季度精选</a></li>
					<li><a href="">饮料</a></li>
					<li><a href="">美食</a></li>
					<li><a href="">咖啡产品</a></li>
					<li><a href="">商品</a></li>
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
		position: absolute;
		top: 280px;
		left: 100px;
	}
	ul > li {
		list-style: none;
		margin: 20px 20px 20px 0px;
	}
	ul > li > a {
		color: #777;
	}
	ul > li > a:hover {
		color: black;
	}
	ul > li > a:hover {
		font-weight: 700;
		border-bottom: 3px solid #00a862;
	}
</style>