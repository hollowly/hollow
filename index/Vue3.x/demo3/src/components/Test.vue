<!--  -->
<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import { watch, watchEffect } from "vue";
export default {
  setup(props) {
    watchEffect(() => {
      console.log(props.title);
    });
    watch(
      () => {
        return props.title;
      },
      (newValue) => {
        console.log(newValue);
      }
    );
  },
  props: {
    title: String,
  },
};
</script>

<style scoped lang="scss"></style>
