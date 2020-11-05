<!--  -->
<template>
	<div id='tab-bar'>
		<slot></slot>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	},

}

</script>

<style>
	#tab-bar {
		display: flex;
		background: #f9f9f9f9;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		box-shadow: 1px -1px 1px rgba(100, 100, 100, 0.2);
	}
</style>