<template>
  <div id="app">
		<headerImg></headerImg>

		<middle>
			<li>海外酒店</li>
			<li>团购</li>
			<li>特惠酒店</li>
			<li>客栈公寓</li>
		</middle>

		<!-- <middle>
		</middle>

		<middle>
		</middle> -->
  </div>
</template>

<script>
import headerImg from './components/headerImg'
import middle from './components/middle'
export default {
	components: {
		headerImg,
		middle
	}
}
</script>

<style>
	@import url('./assets/css/base.css');

	
</style>
