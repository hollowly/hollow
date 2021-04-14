<!--  -->
<template>
  <div>
    <button @click="change">trigger</button>
  </div>
</template>

<script>
import { reactive, toRefs, ref, watch } from "vue";
export default {
  setup(props) {
    // 定义的参数或变量
    const state = reactive({
      aa: 1,
    });

    const change = () => {
      state.aa++;
    };

    var stop = watch(
      () => {
        return state.aa;
      },
      (newCount, oldCount, onInvalidate) => {
        console.log(newCount, oldCount);

        onInvalidate(() => {
          console.log("onInvalidate is trigger");
        });
      }
    );

    setTimout(() => {
      stop();
    }, 3000);

    // 要暴露的参数或方法 ↓
    return { ...toRefs(state), change };
  },
};
</script>

<style scoped lang="scss"></style>
