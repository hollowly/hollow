<!--  -->
<template>
	<div>
		<ul class="footText_ul">
			<li><a href="">电话预定</a></li>
			<li><a href="">下载客户端</a></li>
			<li><a href="">我的</a></li>
		</ul>
		<div class="Text_fotter">
			<p><a href="">网站地图</a> | <a href="">ENGLISH</a> | <a href="">电脑版</a></p>
			<p>©2015携程旅行</p>
		</div>
	</div>
</template>

<script>
export default {
	
}

</script>

<style>
	.footText_ul {
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		height: 50px;
		display: flex;
		list-style: none;
	}
	.footText_ul > li {
		line-height: 50px;
		text-align: center;
		flex: 1;
	}
	.footText_ul > li > a:hover, .Text_fotter a:hover {
		color: skyblue;
	}
	.Text_fotter {
		margin-top: 15px;
		text-align: center;
	}
	.Text_fotter a {
		text-decoration:underline;
	}
</style>