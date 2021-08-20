<!--  -->
<template>
  <div>
    <topslot>
      <template v-slot:a>
        <div>aaa</div>
      </template>
      <template v-slot:default>
        <span>bbb</span>
      </template>
      <template v-slot:c>
        <span>ccc</span>
      </template>
    </topslot>
  </div>
</template>

<script>
import topslot from "@/components/slot/topslot";
import { reactive, toRefs, onMounted } from "vue";
export default {
  setup(props) {
    // 定义的参数或变量
    const state = reactive({});

    // 方法写在下面 ↓

    // 要暴露的参数或方法 ↓
    return { ...toRefs(state) };
  },
  components: {
    topslot,
  },
};
</script>

<style scoped lang="scss"></style>
