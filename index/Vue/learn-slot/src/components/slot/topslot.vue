<!--  -->
<template>
  <div>
    <slot name="a">1111</slot>
    <slot name="b">2222</slot>
    <slot name="c">3333</slot>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
export default {
  setup(props) {
    // 定义的参数或变量
    const state = reactive({
      mount: "onMounted",
    });

    // 方法写在下面 ↓=

    // 要暴露的参数或方法 ↓
    return { ...toRefs(state) };
  },
};
</script>

<style scoped lang="scss"></style>
