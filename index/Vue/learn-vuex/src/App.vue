<template>
  <div id="app">
		<h3>{{$store.state.num}}</h3>
		<button @click='addClick'>+</button>
		<button @click='subClick'>-</button>
	<cpn1></cpn1>
  </div>
</template>

<script>
import cpn1 from './components/cpn1'

export default {
	name: 'App',
	components: {
		cpn1
	},
	methods: {
		addClick() {
			this.$store.commit('add')
		},
		subClick() {
			this.$store.commit('sub')
		}
	},
}
</script>

<style>


</style>
