<!-- markRaw -->
<template>
  <div>
    <!-- shallow :转响应式。。markRaw：转普通对象。这两个都不是深度的 -->
  </div>
</template>

<script>
import { reactive, toRefs, ref, markRaw } from "vue";
export default {
  setup(props) {
    // markRaw：目的是为了让一些嵌套的对象避免被响应式的包装，因为有些数据是不需要响应式的，所以要用到markRaw
    // 定义的参数或变量
    const obj = {
      name: "张三",
    };
    const newObj = markRaw(obj);
    console.log(newObj);
    console.log(obj);
    console.log(obj === newObj);
    obj.name = "666666";
    console.log(newObj);
    console.log(obj);
    console.log(obj === newObj);
    // 无论怎么代理被 markRaw 包裹的对象，都是无法被代理的，它仍然是普通对象
    const proxyObj = reactive(newObj);
    const newproxyObj = reactive({ newObj });
    console.log(proxyObj);
    console.log(newproxyObj);

    // markRaw 不会让more变成响应式
    const more = markRaw({
      a: 10,
      b: 20,
    });

    const obj1 = {
      a: 1,
      b: 2,
      // 这里的 more 被 markRaw 包装过，所以 more 不会被 reactive 变成响应式的
      more: more,
    };

    //因为 reactive 是深度的，而 markRaw 不是深度的，所以要用 markRaw 包装more
    // 然后 reactive 才不会把 more 变成响应式的
    const state = reactive(obj1);
    console.log(obj1); //仍然是原对象

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
