<!--  -->
<template>
	<div>
		<h1>Father to son(props)</h1>
		<ul>
			<li v-for='(item, index) in clis' :key='index'>{{item}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	},
	props: {
		clis: {
			type:Array,
			default:['default'],
		}
	}

}

</script>

<style>

</style>