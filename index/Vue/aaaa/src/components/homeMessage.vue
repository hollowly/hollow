<!--  -->
<template>
	<div>
		<ul>
			<li v-for='item in messages' :key='item'>{{item}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			messages:['消息1','消息2','消息3','消息4'],
		}
	},

}

</script>

<style>

</style>