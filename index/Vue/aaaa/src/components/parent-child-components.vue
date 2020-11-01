<!--  -->
<template>
	<div>
		<cpn1 :clis='lis'></cpn1>
		<h1>Father to son(props)</h1>
		<ul>
			<li v-for='(item, index) in clis' :key='index'>{{item}}</li>
		</ul>
		<hr>
		<h1>Combining parent-child components with v-bind</h1>
	</div>
</template>

<script>
export default {
	data () {
		return {
		}
	},
	props: {
		clis:{
			type:Array,
			default:['default'],
		}
	}

}

</script>

<style>

</style>