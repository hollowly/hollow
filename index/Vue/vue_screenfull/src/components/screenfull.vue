<!--  -->
<template>
  <div>
    <img src="@/assets/logo.png" @click="screenfull()" />
  </div>
</template>

<script>
import screenFull from "screenfull";
import { reactive, toRefs, onMounted } from "vue";
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

    const screenfull = () => {
      screenFull.toggle();
    };

    // 要暴露的参数或方法 ↓
    return { ...toRefs(state), screenfull };
  },
};
</script>

<style scoped lang="scss">
img {
  border: solid red;
  cursor: pointer;
}
</style>
