<template>
  <div id="app">
		<h2>----------------App内容----------------</h2>
		<h3>{{$store.state.num}}</h3>
		<button @click='addClick'>+</button>
		<button @click='subClick'>-</button>

		<h2>----------------App内容：getters相关信息----------------</h2>
		<h2>{{$store.getters.power}}</h2>	




		<h2>----------------cpn1内容----------------</h2>
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
