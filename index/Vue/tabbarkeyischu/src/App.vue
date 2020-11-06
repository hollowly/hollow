<template>
  <div id="app">
		
		<maintabbar></maintabbar>

		<keep-alive>
			<router-view></router-view>
		</keep-alive>
  </div>
</template>
<script>

import maintabbar from './components/tabbar/maintabbar'

export default {
	name: 'App',
	components: {
		maintabbar,
	},
	
}
</script>

<style>

	@import url('../src/assets/css/base.css');

</style>
