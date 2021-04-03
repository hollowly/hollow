<!--  -->
<template>
  <div>
    <Test :title="title"></Test>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
import Test from "@/components/Test";
export default {
  setup() {
    const state = reactive({
      title: "我是vue",
    });

    setTimeout(() => {
      state.title = "我是vue3.0";
    }, 1000);

    return { ...toRefs(state) };
  },

  components: {
    Test,
  },
};
</script>

<style scoped lang="scss"></style>
