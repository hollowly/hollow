<template>
  <div id="app">
		
  </div>
</template>
<script>

export default {
  name: 'App'
}
</script>


<script>
axios({
	url:'http://123.207.32.32:8000/home/multidata',
	method:'get'
}).then(res => {
	console.log(res);
})
</script>


<style>

</style>
