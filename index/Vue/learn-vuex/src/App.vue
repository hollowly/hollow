<template>
  <div id="app">
		<h3>{{$store.state.num}}</h3>
		<button @click='$store.state.num++'>+</button>
		<button @click='$store.state.num--'>-</button>
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
