<!--  -->
<template>
	<div>
	</div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue';
export default {
	setup(props) {
		// 定义的参数或变量
		const state = reactive({

		});

		// 方法写在下面 ↓
		const methods = () => {
			console.log('methods');
		};

		// 要暴露的参数或方法 ↓
		return { ...toRefs(state), methods }
	},

}

</script>

<style scoped lang='scss'>

</style>