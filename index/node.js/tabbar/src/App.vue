<template>
  <div id="app">
		<tabbar>
		</tabbar>
		<router-view />


	<div>
		<span>{{value}}</span> <br>
		<input type="text" v-model="value">

	</div>
		
  </div>
</template>

<script>
import tabbar from './components/tabbar/tabbar'
export default {
	data() {
		return {
			value:123
		}
	},
	components: {
		tabbar,
	}
}
</script>

<style>
</style>
