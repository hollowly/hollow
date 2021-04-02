<!-- home -->
<template>
  <div class="box">
    <p>ToDo List</p>
    <strong>
      共有<span>{{ list.length }} </span>个任务，其中
      <span>{{ finish.length }}</span
      >项已经完成
    </strong>
    <p>未完成列表</p>
    <ul>
      <template v-for="(item, index) in list">
        <li
          class="ccli"
          :key="index"
          @click="() => (item.checked = !item.checked)"
          v-if="!item.checked"
        >
          <div>
            <input
              type="checkbox"
              :id="'item-' + index"
              v-model="item.checked"
            />
            <label :for="'item-' + index">{{ item.name }}</label>
          </div>
        </li>
      </template>
    </ul>

    <p>已完成列表</p>
    <ul>
      <li v-for="(item, index) in finish" :key="'finshed' + index" class="ccli">
        <div>
          <input
            type="checkbox"
            :id="finshed + index"
            v-model="item.checked"
            disabled
          />
          <label :for="finshed + index">{{ item.name }}</label>
        </div>
      </li>
    </ul>
    <p>添加新的Task</p>
    <input type="text" class="txt" v-model="value" />
    <button class="btn" @click="addel()">添加</button>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      value: "",
      list: [
        {
          name: "1",
          checked: false,
          isEdit: false,
        },
        {
          name: "2",
          checked: false,
          isEdit: false,
        },
        {
          name: "3",
          checked: false,
          isEdit: false,
        },
      ],
      finish: computed(() => state.list.filter((item) => item.checked == true)),
    });
    const addel = () => {
      state.list.push({
        name: state.value,
        checked: false,
        isEdit: false,
      });
      state.value = "";
    };
    return { ...toRefs(state), addel };
  },
};
</script>

<style scoped lang="scss">
.box {
  margin: 0 auto;
  width: 70%;
  height: 410px;
  // border: 1px solid red;
  .ccli {
    padding: 10px 0px;
    border: 1px solid #ccc;
  }
  > .txt {
    display: block;
    width: 100%;
    border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    height: 30px;
    outline: none;
    text-indent: 1rem;
  }
  > .txt:hover,
  .txt:focus {
    border: 1px solid skyblue;
  }
  > .btn {
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    margin-top: 20px;
    color: white;
    background: rgb(2, 109, 251);
    cursor: pointer;
  }
  > .btn:hover {
    box-shadow: 2px 2px 2px skyblue;
  }
  strong {
    > span:first-of-type {
      color: deepskyblue;
    }
    > span:last-of-type {
      color: darkseagreen;
    }
  }
}
</style>
