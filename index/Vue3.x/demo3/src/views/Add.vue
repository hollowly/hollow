<!--  -->
<template>
  <div>
    <input type="text" v-model="num1" />
    <span>+</span>
    <input type="text" v-model="num2" />
    <span>=</span>
    {{ result }}
    <br />
    <ul>
      <li v-for="(item, index) in info" :key="index">
        姓名：{{ item.name }} 年龄：{{ item.age }} 性别：{{ item.sex }}
      </li>
    </ul>
    <button @click="change">修改info</button>
    <!-- customRef：防抖 -->
    {{ customRefname }}
    <input type="text" v-model="customRefname" />
  </div>
</template>

<script>
import { computed, reactive, ref, toRefs, customRef } from "vue";
export default {
  setup(props) {
    const aa = ref(2); //ref
    const state = reactive({
      //reactive
      num1: 0,
      num2: 0,
      info: [
        { name: "张三", age: "12", sex: "男" },
        { name: "李四", age: "16", sex: "男" },
        { name: "王五", age: "18", sex: "女" },
      ],
      changeinfo: [
        { name: "冰璃", age: "200", sex: "女" },
        { name: "解庾", age: "210", sex: "男" },
        { name: "夏侯仪", age: "160", sex: "男" },
        { name: "封铃笙", age: "90", sex: "女" },
        { name: "殷剑平", age: "250", sex: "男" },
      ],
      infoname: "张三",
      // computed 使用
      result: computed(() => parseInt(state.num1) + parseInt(state.num2)),
      customRefname: "",
    });
    // 方法写在下面 ↓
    const change = () => {
      let maxlength = state.info.length;
      if (state.info.length > state.changeinfo.length) {
        maxlength = state.info.length;
      } else {
        maxlength = state.changeinfo.length;
      }
      for (let i = 0; i < maxlength; i++) {
        state.info[i] = state.changeinfo[i];
      }
    };

    const showname = (value) => {
      console.log(`我的名字是：${value}`);
    };
    const changename = () => {
      state.infoname = "我是被修改的张三";
    };

    showname(state.infoname);

    setTimeout(() => {
      changename();
      console.log(state.infoname);
    }, 2000);

    console.log(aa.value); //ref 使用
    console.log(state.num1); //reactive 使用
    // customRef防抖：
    const useDebounce = (value, delay = 500) => {
      let t = null;
      return customRef((track, trigger) => {
        return {
          get() {
            track();
            return value;
          },
          set(newVal) {
            clearTimeout(t);
            t = setTimeout(() => {
              value = newVal;
              trigger();
            }, delay);
          },
        };
      });
    };

    const text = useDebounce("", 1000);

    // 要暴露的参数或方法 ↓
    return { ...toRefs(state), change, showname, changename, text };
  },
};
</script>

<style scoped lang="scss"></style>
