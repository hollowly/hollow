<!--  -->
<template>
  <div>
    <child :name="name" :nums="num"></child>
  </div>
</template>

<script>
import child from "./child";
import { reactive, toRefs } from "vue";
export default {
  setup(props) {
    // 定义的参数或变量
    const state = reactive({
      name: "张三",
      num: 12234,
    });

    // 方法写在下面 ↓

    // 要暴露的参数或方法 ↓
    return { ...toRefs(state) };
  },
  components: {
    child,
  },
};
</script>

<style scoped lang="scss"></style>
