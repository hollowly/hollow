<!--  -->
<template>
  <div>
    {{ mount }}
  </div>
</template>

<script>
import home from "./Home";
import { reactive, toRefs, onMounted, provide, ref } from "vue";
export default {
  setup(props) {
    // 定义的参数或变量
    const state = reactive({
      age: 18,
    });

    const name = ref("邓俊贤");

    provide("name", name);

    // 方法写在下面 ↓
    onMounted(() => {
      console.log(state.mount);
    });

    // 要暴露的参数或方法 ↓
    return { ...toRefs(state) };
  },
  components: {
    home,
  },
};
</script>

<style scoped lang="scss"></style>
