<!--  -->
<template>
	<div id='tabbar'>
		<slot></slot>
	</div>
</template>

<script>
export default {


}

</script>

<style>
	#tabbar {
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}

</style>