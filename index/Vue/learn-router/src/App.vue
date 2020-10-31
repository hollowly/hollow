<template>
  <div>
		<h1 id='h1'>我是App组件</h1>
		<cpn1/>
		<cpn2/>
  </div>
</template>

<script>
import cpn1 from './components/Cpn1.vue'
import cpn2 from './components/Cpn2.vue'

export default {
	name: 'App',
	components: {
		cpn1,
		cpn2,
	}
}
</script>

<style>
body {
	background: url('./img/10.jpg');
	background-position: center 0%;
}
#h1 {
	background:red;
}
</style>
