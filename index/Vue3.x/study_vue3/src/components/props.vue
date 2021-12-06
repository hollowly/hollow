<!--  -->
<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="text">触发props的emit事件</button>
  <p><slot name="qwe"></slot></p>
  <p><slot name="asd"></slot></p>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
export default {
  name: 'props',
  props: ['msg', 'school'],
  emits: ['hello'],
  setup(props, context) {
    // console.log(context.attrs) //与vue2中的attrs类似
    // console.log(context.emit) //触发自定义事件
    // console.log(context.slots) //插槽
    const state = reactive({
      person: {
        name: '张三',
        age: 20,
      },
    })

    const text = () => {
      context.emit('hello', 777)
    }

    return { ...toRefs(state), text }
  },
}
</script>

<style scoped lang="scss"></style>
