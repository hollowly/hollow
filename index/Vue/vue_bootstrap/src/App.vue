<template>
  <div id="app">
		<div class="container">
			<div class="row">
				<div class="col-sm">
					One of three columns
				</div>
				<div class="col-sm">
					One of three columns
				</div>
				<div class="col-sm">
					One of three columns
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
	mounted() {
		console.log($);
	}
}
</script>

<style scoped>
.container > .row > div {
	height: 100px;
	background: deeppink;
	border: 1px solid black;
}
</style>

