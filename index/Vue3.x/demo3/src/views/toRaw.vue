<!--  -->
<template>
  <div></div>
</template>

<script>
import { reactive, toRefs, ref, isProxy, toRef, toRaw, markRaw } from "vue";
export default {
  setup(props) {
    // 定义的参数或变量

    var proxyObj = reactive(obj); //响应式对象
    console.log(isProxy(proxyObj));
    var newObj = toRaw(proxyObj); //原对象
    console.log(isProxy(newObj));
    console.log(newObj == obj);

    // 方法写在下面 ↓
    const methods = () => {
      console.log("methods");
    };

    // 要暴露的参数或方法 ↓
    return { methods };
  },
};
</script>

<style scoped lang="scss"></style>
