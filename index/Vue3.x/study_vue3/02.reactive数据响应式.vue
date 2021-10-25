<!--  -->
<template>
  <div>
    <h3>{{ mount }}</h3>
    <h3>{{ person.name }}</h3>
    <h3>{{ person.age }}</h3>
    <h3>{{ person.info.job }}</h3>
    <h3>{{ person.info.money }}</h3>

    <button @click="change">修改</button>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    let state = reactive({
      mount: "测试mount",
      person: {
        naem: "张三",
        age: 18,
        info: {
          job: "前端",
          money: "50K",
        },
      },
    });

    const change = () => {
      state.mount = "123456789";
      state.person.name = "小明";
      state.person.age = "45";
      state.person.info.job = "ui设计";
      state.person.info.money = "20K";
    };

    return { ...toRefs(state), change };
  },
};
</script>

<style scoped lang="scss"></style>
