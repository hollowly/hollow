<!--  -->
<template>
	<div>
		<slot :data='books'>
			<ul>
				<li v-for='(item, index) in books' :key='index'>{{item}}</li>
			</ul>
		</slot>
	</div>
</template>

<script>
export default {
	data () {
		return {
			books:['javascript','php','mysql','jquery','vue'],
		}
	},

}

</script>

<style>

</style>