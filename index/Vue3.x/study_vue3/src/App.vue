<!--  -->
<template>
  姓 <input type="text" v-model="person.firstname" />
  <br />
  名 <input type="text" v-model="person.lastname" /> <br /><br />
  全名：<span>{{ person.fullName }}</span>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
export default {
  name: 'App',
  props: [],
  setup(props, context) {
    const state = reactive({
      person: {
        firstname: '张',
        lastname: '三',
      },
    })
    // 计算属性
    state.person.fullName = computed(() => {
      return state.person.firstname + state.person.lastname
    })
    return { ...toRefs(state) }
  },
}
</script>

<style scoped lang="scss"></style>
