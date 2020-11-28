<!--  -->
<template>
	<div class='contentDiv'>
		<div></div>

		<div>
			<ul>
				<slot></slot>
			</ul>
		</div>

		<div></div>

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
.contentDiv {
	margin: 20px 0px;
		display: flex;
		width: 100%;
		height: 120px;
		background: rgb(83,166,82)
}
.contentDiv > div {
	width: 33.3333333%;
}
ul > li {
	height: 60px;
	list-style: none;
	border-bottom: 1px solid white;
	border-left: 1px solid white;
	float: left;
	
}
</style>