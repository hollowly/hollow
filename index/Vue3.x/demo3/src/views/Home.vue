<!--  -->
<template>
  <div>
    <Test :title="title"></Test>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
import prov from "./依赖-注入";
import { reactive, toRefs, inject } from "vue";
import Test from "@/components/Test";
export default {
  setup() {
    const state = reactive({
      title: "我是vue",
    });

    const name = inject("name", "无名");

    setTimeout(() => {
      state.title = "我是vue3.0";
    }, 1000);

    return { ...toRefs(state), name };
  },

  components: {
    Test,
    prov,
  },
};
</script>

<style scoped lang="scss"></style>
