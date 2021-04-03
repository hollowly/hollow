<!--  -->
<template>
  <div>
    <h1>{{ home }}</h1>
    <button @click="add">++</button>

    <input type="text" v-model="result" />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      result: 0,
      home: "Home page",
    });
    const add = () => {
      return state.result++;
    };

    return { ...toRefs(state), add };
  },
};
</script>

<style scoped lang="scss"></style>
