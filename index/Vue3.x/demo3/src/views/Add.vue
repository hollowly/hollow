<!--  -->
<template>
  <div>
    <input type="text" v-model="num1" />
    <span>+</span>
    <input type="text" v-model="num2" />
    <span>=</span>
    <input type="text" v-model="result" />
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
export default {
  setup(props) {
    const state = reactive({
      num1: 0,
      num2: 0,
      result: computed(() => parseInt(state.num1) + parseInt(state.num2)),
    });

    return { ...toRefs(state) };
  },
};
</script>

<style scoped lang="scss"></style>
