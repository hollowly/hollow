<!--  -->
<template>
	<div>
		<ul>
			<li v-for='item in news' :key="item">{{item}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			news:['新闻1','新闻2','新闻3','新闻4']
		}
	},

}

</script>

<style>

</style>