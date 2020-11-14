<!--  -->
<template>
	<div id='TabBar'>
		<slot></slot>
	</div>
</template>

<script>
export default {
	components: {
	}
}

</script>

<style>
	#TabBar {
		display: flex;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: 1px -2px 1px rgba(0, 0, 0,0.1);
	}
</style>