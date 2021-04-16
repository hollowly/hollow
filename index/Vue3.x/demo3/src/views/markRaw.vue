<!-- markRaw -->
<template>
  <div></div>
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

    // 使用
    const more = markRaw({
      c: 3,
      d: 4,
    });

    const objA = {
      a: 1,
      b: 2,
      more: more,
    };

    // 这样包装的话，objA会变成响应式的，但是 more 被 markRaw 包装了，所以objA里面的 more 不会被响应式
    const newObjA = reactive(objA);
    console.log(newObjA);

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
