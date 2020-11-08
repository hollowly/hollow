<template>
  <div id="app">
		<h2>{{$store.state.num}}</h2>
		<button @click='num++'>+</button>
		<button @click='num--'>-</button>
	<cpn1></cpn1>
  </div>
</template>

<script>
import cpn1 from './components/cpn1'

export default {
	name: 'App',
	components: {
		cpn1
	}
}
</script>

<style>


</style>
