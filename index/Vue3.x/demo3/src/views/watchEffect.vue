<!--  -->
<template>
  <div></div>
</template>

<script>
import { reactive, watchEffect, toRefs } from "vue";
export default {
  setup(props) {
    const state = reactive({
      a: 1,
    });

    setTimeout(() => {
      state.a = 10;
    }, 1000);

    setTimeout(() => {
      state.a = 1000;
    }, 3000);

    setTimeout(() => {
      stop();
    }, 2000);

    var stop = watchEffect(() => {
      console.log(state.a);
    });

    return { ...toRefs(state) };
  },
};
</script>

<style scoped lang="scss"></style>
