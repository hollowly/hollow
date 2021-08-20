<template>
  <div>
    <div style="width: 100vw;height: 100vh" id="container"></div>
  </div>
</template>
<script>
import AMap from "AMap";
export default {
  name: "Index",
  data() {
    return {};
  },
  mounted() {
    new AMap.Map("container", {
      resizeEnable: true,
      zoom: 11,
    });
  },
};
</script>
