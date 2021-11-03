<!--  -->
<template>
  <div>
    {{ mount }}
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, onBeforeMount, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";
export default {
  setup(props) {
    // 定义的参数或变量
    const state = reactive({
      mount: "onMounted",
    });

    // 生命周期函数或自定义方法写在下面 ↓
    onBeforeMount(() => {
      console.log("onBeforeMount：挂载前执行");
    });
    onMounted(() => {
      console.log("onMounted：挂载之后执行，只会执行一次，一般可以做一些ajax操作");
    });
    onBeforeUpdate(() => {
      console.log();
      console.log("onBeforeUpdate：数据更新之前调用");
    });
    onUpdated(() => {
      console.log("onUpdated：数据更新之后调用");
    });

    onBeforeUnmount(() => {
      console.log("onBeforeUnmount：实例销毁之前执行");
    });

    onUnmounted(() => {
      console.log("onUnmounted：实例销毁后执行");
    });

    const methods = () => {
      console.log("methods");
    };

    // 要暴露的参数或方法 ↓
    return { ...toRefs(state), methods };
  },
};
</script>

<style scoped lang="scss"></style>
