<!--  -->
<template>
  <div>
    {{ mount }}
  </div>
</template>

<script>
import { reactive, toRefs, onMounted,provide,inject } from "vue";
export default {
  setup(props) {
    // 定义的参数或变量
    const state = reactive({
      mount: "onMounted",
    });

    // 方法写在下面 ↓
    onMounted(() => {
      console.log(state.mount);
    });

    // 要暴露的参数或方法 ↓
    return { ...toRefs(state) };
  },
};
</script>

<style scoped lang="scss"></style>
