<!--  -->
<template>
  <div>
    <input type="text" v-model="num1" />
    +
    <input type="text" v-model="num2" />
    =
    {{ result }}

    <ul>
      <li v-for="(item, index) in info" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs, ref, computed } from "vue";
export default {
  setup(props) {
    // 定义的参数或变量
    const state = reactive({
      num1: 12,
      num2: 45,
      info: ["1", "2", "3", "4"],
      result: computed(() => state.num1 + state.num2),
    });
    const aa = ref(9);

    // 方法写在下面 ↓
    const methods = () => {
      console.log("methods");
    };

    console.log(aa.value);

    // 要暴露的参数或方法 ↓
    return { ...toRefs(state), methods, aa };
  },
};
</script>

<style scoped lang="scss"></style>
