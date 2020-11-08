<template>
  <div id="app">
		<h2>{{num}}</h2>
		<button @click='num++'>+</button>
		<button @click='num--'>-</button>
	<cpn1 :num='num'></cpn1>
  </div>
</template>

<script>
import cpn1 from './components/cpn1'

export default {
	name: 'App',
	data() {
		return {
			num: 0,
		}
	},
	components: {
		cpn1
	}
}
</script>

<style>


</style>
