<!-- 浅的响应式 -->
<template>
  <div>
    111
    <h3>{{ name }}:{{ info.age }}</h3>
    <button @click="changeName">changeName</button>
    <button @click="changeAge">changeAge</button>
  </div>
</template>

<script>
import { reactive, toRefs, ref, shallowReactive } from "vue";
export default {
  setup(props) {
    // 定义的参数或变量
    const state = shallowReactive({
      name: "张三",
      info: {
        age: 18,
      },
    });

    var changeAge = () => {
      state.info.age = 20;
    };
    const changeName = () => {
      state.name = "李四四";
    };

    // 要暴露的参数或方法 ↓
    return { ...toRefs(state), changeAge, changeName };
  },
};
</script>

<style scoped lang="scss"></style>
