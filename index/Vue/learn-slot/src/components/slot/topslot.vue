<!--  -->
<template>
  <div>
    <div class="a"><slot name="a">旧1111</slot></div>
    <slot name="b">旧2222</slot><br />
    <slot name="c">旧3333</slot><br />
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

    // 方法写在下面 ↓

    // 要暴露的参数或方法 ↓
    return { ...toRefs(state) };
  },
};
</script>

<style scoped lang="scss">
.a {
  color: red;
  font-size: 30px;
}
</style>
