<template>
  <div id="app">
		<headerImg></headerImg>
		<content></content>
  </div>
</template>

<script>
import headerImg from './components/headerImg'
import content from './components/content'
export default {
	components: {
		headerImg,
		content
	}
}
</script>

<style>
	@import url('./assets/css/base.css');
</style>
