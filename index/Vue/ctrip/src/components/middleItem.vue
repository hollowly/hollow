<!--  -->
<template>
	<div class='contentDiv'>
		<!-- left -->
		<div></div>
		<!-- middle -->
		<div>
			<ul>
				<slot name='left'></slot>
			</ul>
		</div>
		<!-- right -->
		<div>
			<ul>
				<slot name='right'></slot>
			</ul>
		</div>
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
	height: 100px;
	background: rgb(83,166,82);
	border-radius: 10px;
	
}
.contentDiv > div {
	width: 33.3333333%;
}
.contentDiv ul > li {
	height: 50px;
	list-style: none;
	border-bottom: 1px solid white;
	border-left: 1px solid white;
	text-align: center;
	line-height: 50px;
}
 .contentDiv ul > li > a {
	color: white;
 }
 .contentDiv ul > li > a:hover {
	 text-decoration:underline;
 }
</style>