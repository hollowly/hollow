<!--  -->
<template>
	<div>
		<div id='sidebar'>

			<div class="sidebar-header">
				<a href="/" style="float:left"><img src="@/assets/img/logo.svg" width="40"></a>
				<div class="title">
					<router-link to='/home'>主页</router-link>
					<router-link to='/about'>关于</router-link>
					<router-link to='/profile'>我的</router-link>
				</div>
				<a href="" class='sidebar-more'>☰</a>
			</div>



		</div>
		<router-view />
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
	a {
		display: inline-block;
	}
	#sidebar {
		position: fixed;
		top: 0;
		bottom: 0;
		box-shadow: 1px 1px 4px #ccc;
		font-weight: 700
	}
	.sidebar-header {
		padding: 20px 0px 0px 20px;
	}
	.title {
		float: left;
	}
	.title > a {
		margin: 10px 20px;
		font-size: 16px
	}

	.sidebar-more {
		margin: 2px 20px;
		font-size: 25px
	}
</style>