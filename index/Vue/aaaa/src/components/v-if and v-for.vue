<!--  -->
<template>
	<div>
		<h1>v-if switch：</h1>
		<label for="user" v-if='isChange'>
			User account：<input type="text" id="user" placeholder='请输入账号'>
		</label>
		<label for="email" v-else>
			User email：<input type="text" id="email" placeholder="请输入邮箱">
		</label>
		<button @click='change'>Click to change</button>
		<hr>
		<h1>Adding key to V-for：</h1>
		<h3>Note: adding key is to improve efficiency when modifying nodes internally <br>
			译：注释：加key是为了内部修改节点的时候效率更高
		</h3>
		<ul>
			<li v-for='item in lis' :key='item'>{{item}}</li>
		</ul>
		<button @click='removeLis'>删除</button>
		
	</div>
</template>

<script>
export default {
	data () {
		return {
			isChange:true,
			lis:['javascript','php','java','python','c++','jquery','bootstrap']
		}
	},
	methods: {
		change() {
			this.isChange = !this.isChange
		},
		removeLis() {
			this.lis.pop()
		}
	},

}

</script>

<style>

</style>