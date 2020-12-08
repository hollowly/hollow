<template>
  <div id="app">
		<tabbar />
		<router-view />
  </div>
</template>

<script>
import tabbar from './components/tabbar'

export default {
	components: {
		tabbar
	}
}
</script>
<style>
	@import url("./assets/css/base.css");
</style>
