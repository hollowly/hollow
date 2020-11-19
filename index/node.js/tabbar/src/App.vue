<template>
  <div id="app">
		<tabbar>

		</tabbar>

		<router-view />
  </div>
</template>

<script>
import tabbar from './components/tabbar/tabbar'
export default {
	components: {
		tabbar,
	}
}
</script>

<style>
</style>
