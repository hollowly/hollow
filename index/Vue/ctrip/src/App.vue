<template>
  <div id="app">
		<headerImg></headerImg>
		<middle></middle>
		<footImg></footImg>
  </div>
</template>

<script>
import headerImg from './components/headerImg'
import middle from './components/middle'
import footImg from './components/footImg'
export default {
	components: {
		headerImg,
		middle,
		footImg
	}
}
</script>

<style>
	@import url('./assets/css/base.css');

	
</style>
