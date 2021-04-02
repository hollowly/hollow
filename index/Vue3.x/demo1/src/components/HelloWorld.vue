<template>
  <div class="hello">
    <input type="text" v-model='state.num1'/>
    <span>+</span>
    <input type="text" v-model='state.num2'/>
    <span>=</span>
		{{state.result}} <br><br>
		<button value="event" @click="clickevent()">emit event</button>
		<br><br><br>

		<span>{{state.num3}}</span><br>
		<button @click='state.num3++'>+</button>
		<button @click='state.num3--'>-</button>
  </div>
</template>

<script>
const state = reactive({
	num1: 0,
	num2: 0,
	result: computed(() => parseInt(state.num1) + parseInt(state.num2)),
	num3: 0,
})
import {
	onMounted, 
	onUpdated, 
	onUnmounted, 
	onRenderTracked,
	onRenderTriggered, 
  reactive,
	computed
} from 'vue'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
	setup(props, { emit } ) {
		console.log(props);
		const clickevent = () => {
			emit('sengMsg', state.result)
		}
		onMounted(() => {
			console.log('onMounted');
		})
		onUpdated(() => {
			console.log('onUpdated');
		})
		onUnmounted(() => {
			console.log('onUnmounted');
		})
		onRenderTracked((e) => {
			console.log('onRenderTracked'+ e);
		})
		onRenderTriggered(() => {
			console.log('onRenderTriggered');
		})
		return {
			clickevent,
			state
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 添加 “scoped” 属性以将CSS仅限于此组件 -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
