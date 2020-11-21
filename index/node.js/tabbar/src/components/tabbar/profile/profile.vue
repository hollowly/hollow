<!--  -->
<template>
	<div>
		<h1>profile</h1>
		温馨提示：这里有一个隐形按钮哦：可千万别点提交哦.建议F12查看源代码哦
		 <br>
		<input type="hidden" :value="value1">
		<input type="hidden" :value="value2">
		您当前的账号是：{{value1}} <br>
		您当前的密码是：{{value2}} <br>
		账号：<input type="text" v-model="value1"> <br>
		密码：<input type="password" v-model="value2"> <br>
		<input type="submit">
	</div>
</template>

<script>
export default {
	data () {
		return {
			value1:'profile',
			value2:'passworld'
		}
	},

}

</script>

<style>

</style>