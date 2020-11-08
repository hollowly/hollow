<!--  -->
<template>
	<div>
		<h2>{{$store.state.num}}</h2>
		<h2>{{$store.getters.power}}</h2>
		<h5>{{$store.getters.more20Stu}}</h5>
		<h3>{{$store.getters.more20StuLength}}</h3>
		<h3>{{$store.getters.moreAgeStu(30)}}</h3>
	</div>
</template>

<script>
export default {

}

</script>

<style>

</style>