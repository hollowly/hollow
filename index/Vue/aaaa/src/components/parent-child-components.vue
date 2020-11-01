<!--  -->
<template>
	<div>
		<h1>Father to son(props)</h1>
		<ul>
			<li v-for='(item, index) in clis' :key='index'>{{item}}</li>
		</ul>
		<hr>
		<h1>parent to child components with v-bind</h1>
		<h2>cnum1 = {{cnum1}}</h2>
		<h2>dnum1 = {{dnum1}}</h2>
		<input type="text" v-model='dnum1' @input='dnum1Change()'>
		<hr>
		<h2>cnum2 = {{cnum2}}</h2>
		<h2>dnum2 = {{dnum2}}</h2>
		<input type="text" v-model='dnum2' @input='dnum2Change()'>
		<hr>
	</div>
</template>

<script>
export default {
	data () {
		return {
			dnum1: this.cnum1,
			dnum2: this.cnum2,
		}
	},
	methods: {
		dnum1Change(value) {
			this.$emit('num1Change',this.dnum1)
		},
		dnum2Change(value) {
			this.$emit('num2Change',this.dnum2)
		},
	},
	props: {
		clis:{
			type:Array,
			default:['default'],
		},
		cnum1: {
			type:Number,
			default:111,
		},
		cnum2: {
			type:Number,
			default:222,
		}
	}

}

</script>

<style>

</style>