<template>
  <div id="app">
		<headerImg></headerImg>
		<middle></middle>
		<footImg></footImg>
		<footText></footText>
  </div>
</template>

<script>
import headerImg from './components/headerImg'
import middle from './components/middle'
import footImg from './components/footImg'
import footText from './components/footText'
export default {
	components: {
		headerImg,
		middle,
		footImg,
		footText
	}
}
</script>

<style>
	@import url('./assets/css/base.css');

	
</style>
