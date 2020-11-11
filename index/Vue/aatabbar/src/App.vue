<template>
  <div id="app">
		<tabbar>
			<tabbaritem>
				<img src="">
				<div>我的</div>
			</tabbaritem>
		</tabbar>
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
