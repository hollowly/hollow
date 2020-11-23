<template>
  <div id="app">
		<!-- <button @click='getData'>获取数据</button> -->
		<table>
			<tr v-for="(item, index) in bannerList" :key='index'>
				<td>{{index + 1}}{{item.sort}}.</td>
				<td><a :href="item.link">{{item.title}}</a></td>
				<td><img :src="item.image" width="100"></td>
			</tr>
			<tr v-for="item in recommendList">
				<td>{{item.sort}}.</td>
				<td><a :href="item.link">{{item.title}}</a></td>
				<td><img :src="item.image" width="100"></td>
			</tr>
		</table>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
		return {
			bannerList:[],
			recommendList:[]
		}
	},
	created() {
		axios.all([
			axios({url:'http://123.207.32.32:8000/home/multidata'}).then(data => {
				this.bannerList = data.data.data.banner.list
			}),
			axios({url:'http://123.207.32.32:8000/home/multidata'}).then(data => {
				this.recommendList = data.data.data.recommend.list
			})
		])
	}
}

</script>


<style>

</style>
