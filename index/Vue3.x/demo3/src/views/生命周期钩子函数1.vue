<!--  -->
<template>
  <div>
    {{ mount }}

    <pre>
		`beforeCreate`  => 	 `setup()`
		`created`      	=> 	 `setup()`
		`beforeMount` 	=> 	 `onBeforeMount`
		`mounted`     	=> 	 `onMounted`
		`beforeUpdate`	=> 	 `onBeforeUpdate`
		`updated`       => 	 `onUpdated`
		`beforeUnmount` => 	 `onBeforeUnmount`
		`unmounted`     => 	 `onUnmounted`
		`errorCaptured` => 	 `onErrorCaptured`
		`renderTracked` => 	 `onRenderTracked`
		`renderTriggered` => 	 `onRenderTriggered`</pre>
  </div>
</template>

<script>
import {
  reactive,
  toRefs,
  getCurrentInstance,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
} from "vue";
export default {
  // 选项api（option）
  mounted() {
    console.log("这是选项api");
  },
  setup(props) {
    // 定义的参数或变量
    const state = reactive({
      mount: "onMounted",
    });
    // 方法写在下面 ↓
    // 没有this，只能通过 getCurrentInstance 获取当前实例
    const current = getCurrentInstance();
    console.log(current);
    // 组合api（composition）
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted，一般数据请求放在这里");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onErrorCaptured(() => {
      console.log("onErrorCaptured");
    });
    onRenderTracked(() => {
      console.log("onRenderTracked");
    });
    onRenderTriggered(() => {
      console.log("onRenderTiggered");
    });

    // 要暴露的参数或方法 ↓
    return { ...toRefs(state) };
  },
};
</script>

<style scoped lang="scss">
pre {
  font-weight: 700;
  font-size: 18px;
}
</style>
