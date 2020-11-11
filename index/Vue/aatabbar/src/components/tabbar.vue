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
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		position: fixed;
		display: flex;
	}
</style>