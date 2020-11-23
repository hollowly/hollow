<template>
  <div id="app">
			<ul>
				<li v-for='(item, index) in list' :key='index'>{{item}}</li>
			</ul>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
		return {
			list:['111','222']
		}
	},
	computed: {
		
	},
}

axios({
	url:'http://123.207.32.32:8000/home/multidata',
	method:'get',
}).then(res => {
	this.list = res.data.data.banner.list
	console.log(this.list);
}).catch(err => {
	console.log(err);
})

</script>


<style>

</style>
