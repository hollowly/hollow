<template>
  <h1>个人信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <br />
  <h2>工作类型：{{ info.type }}</h2>

  <button @click="changeInfo">修改信息</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    let name = ref("邓俊贤");
    let age = ref("18");

    let info = ref({
      type: "前端工程师",
      price: "30K",
      time: 9,
    });

    const changeInfo = () => {
      age.value = 20; //这里必须要通过  .value  来修改值
      info.value.type = "1122eq2"; //如果是一个对象就这样写，这个对象引用的是es6的reactive方法。和普通参数不同
    };

    return { name, age, info, changeInfo };
  },
};
</script>

<style lang="scss"></style>
