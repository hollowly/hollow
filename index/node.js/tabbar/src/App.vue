<template>
  <div id="app">
		
		<span>{{value}}</span> <br>
		<input type="text" v-model="value">
		<tabbar>
		</tabbar>
		<router-view />
  </div>
</template>

<script>
import tabbar from './components/tabbar/tabbar'
export default {
	data() {
		return {
			value:123,
		}
	},
	components: {
		tabbar,
	}
}
</script>

<style>
</style>
