<!--  -->
<template>
	<div>
		<h2>{{$store.state.num}}</h2>
		<h2>{{$store.getters.power}}</h2>
		<h5>{{$store.getters.more20Stu}}</h5>
		<h3>{{$store.getters.more20StuLength}}</h3>
		<h3>{{$store.getters.moreAgeStu(30)}}</h3>
		<h2>-----------------------------------------------------------------------</h2>

		<h3>{{$store.state.books}}</h3>
		<button @click='btnClick'>按钮</button>

	</div>
</template>

<script>
export default {
	methods: {
		btnClick() {
			this.$store.commit('updataBooks')
		}
	},
}

</script>

<style>

</style>