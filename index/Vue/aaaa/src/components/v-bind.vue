<!--  -->
<template>
	<div>
		<h2>v-bind动态绑定class：</h2>
		<h2><a v-bind:href="url">我的博客：</a></h2>
		<img :src="imgUrl" width="300"> <br><br>
		<span :class="{active:isActive}">{{message}}</span> <br>
		<button @click='changeActive'>点我为上面的文字添加样式</button>
		<h2>动态绑定style：</h2>
		<span :style='getStyle()'>{{message}}</span>
		
	</div>
</template>

<script>
export default {
	data () {
		return {
			message: 'hello Vue',
			isActive:false,
			url: 'https://www.cnblogs.com/hollows/',
			imgUrl: 'https://images.cnblogs.com/cnblogs_com/ache/1644357/o_20022410503214.jpg'
		}
	},
	methods: {
		changeActive() {
			this.isActive = !this.isActive
		},
		getStyle() {
			return {'background':'pink','display':'block','fontSize':'80px','color':'red','fontWeight':'700'}
		}
	},

}

</script>

<style>
	.active {
		font-size: 22px;
		font-weight: 800;
		color: blue;
		text-shadow: 1px 1px 3px red;
	}
</style>