<!--  -->
<template>
  <div>
    1111
    <div id="pie"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { reactive, toRefs, onMounted } from "vue";
export default {
  setup(props) {
    // 定义的参数或变量
    const state = reactive({
      mount: {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
    });

    // 方法写在下面 ↓
    onMounted(() => {
      var myChart = echarts.init(document.getElementById("pie"));
      myChart.setOption(state.mount);
    });

    // 要暴露的参数或方法 ↓
    return { ...toRefs(state) };
  },
};
</script>

<style scoped lang="scss">
#pie {
  width: 700px;
  height: 600px;
}
</style>
