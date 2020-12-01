
<template>
  <div id="app">
		<dataV></dataV>
  </div>
</template>


<script>
	import dataV from './components/dataV';
	export default {
		name: 'App',

		components: {
			dataV
		}
		
	}
</script>


<style>
@import url('./assets/css/base.css');
body {
	color:white;
	background: black;
}
</style>
