<template>
  <div class="hello">
    <input type="text" v-model="state.num1" />
    <span>+</span>
    <input type="text" v-model="state.num2" />
    <span>=</span>
    {{ state.result }}<br>
		<button value="event" @click="clickevent()">emit event</button>
		<br><br><br>
		<span>{{ state.spannum }}</span><br>
		<button @click="state.spannum++">+</button>
		<button @click="state.spannum--">-</button>
  </div>
</template>

<script>
// function add() {
// 	return state.result = parseInt(state.num1) + parseInt(state.num2)
// }
const state = reactive({
	num1: 0,
	num2: 0,
	spannum: 0,
	result: computed(() => parseInt(state.num1) + parseInt(state.num2)),
})
import {
	reactive, 
	computed, 
	onMounted, 
	onUpdated, 
	onUnmounted, 
	onRenderTracked,
	onRenderTriggered 
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
			state,
			clickevent
		}
	}
	
	// const num1 = ref(0);
	// const num2 = ref(0);
	// const result = ref(0);

  // data() {
  // 	return {
  // 		num1: 0,
  // 		num2: 0,
  // 		result: 0,
  // 	}
  // },
  // computed: {
  // 	result() {
  // 		return parseInt(this.num1) + parseInt(this.num2)
  // 	}
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
