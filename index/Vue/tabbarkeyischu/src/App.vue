<template>
  <div id="app">
		<tabbar>
				<tabbaritem>
			<img src="../../assets/img/tabbar/home.png">
			<div>首页</div>
				</tabbaritem>
				<tabbaritem>

				</tabbaritem>
		</tabbar>
  </div>
</template>
<script>
import tabbar from './components/tabbar/tabbar'
import tabbaritem from './components/tabbar/tabbaritem'
export default {
	name: 'App',
	components: {
		tabbar,
		tabbaritem,
	}
}
</script>

<style>

@import url('../src/assets/css/base.css');

</style>
