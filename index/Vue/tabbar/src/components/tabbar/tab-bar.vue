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
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>