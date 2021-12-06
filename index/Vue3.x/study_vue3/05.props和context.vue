<!--  -->
<template>
  <props @hello="show" msg="你好啊" school="尚硅谷">
    <template v-slot:qwe>
      <span>v-slot尚硅谷</span>
    </template>
    <template #asd>
      <span>#尚硅谷</span>
    </template>
  </props>
</template>

<script>
import props from './components/props.vue'
import { reactive, toRefs } from 'vue'
export default {
  setup() {
    const state = reactive({
      mount: 'onMounted',
    })

    const show = (value) => {
      console.log('你触发了props的事件，收到的结果是', value)
    }

    return { ...toRefs(state), show }
  },
  components: {
    props,
  },
}
</script>

<style scoped lang="scss"></style>
