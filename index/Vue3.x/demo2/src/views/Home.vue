<!-- home -->
<template>
  <div class="box" @mousedown="mousedown()">
    <p>ToDo List</p>
    <strong>
      共有<span>{{ list.length }} </span>个任务，其中
      <span>{{ finish.length }}</span
      >项已经完成
    </strong>
    <p>未完成列表</p>
    <ul>
      <template v-for="(item, index) in list">
        <li class="ccli" :key="index" v-if="!item.checked">
          <div>
            <input
              type="checkbox"
              v-model="item.checked"
              @click="() => (item.checked = !item.checked)"
            />
            <label v-if="!item.isEdit" @dblclick="showEdit(item, index)"
              >{{ item.name }}
            </label>
            <label :for="'item-' + index" v-else>
              <input type="text" v-model="editValue" ref="myinput" />
            </label>
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
    <input
      type="text"
      class="txt"
      v-model="value"
      placeholder="添加新的Task"
      @keydown.enter="addel()"
    />
    <button class="btn" @click="addel()">添加</button>
  </div>
</template>

<script>
import { reactive, toRefs, computed, ref } from "vue";
export default {
  setup() {
    let editIndex = 0;
    const myinput = ref(null);
    // 添加功能
    const addel = () => {
      state.list.push({
        name: state.value,
        checked: false,
        isEdit: false,
      });
      state.value = "";
    };
    // 双击进行编辑
    const showEdit = (item, index) => {
      editIndex = index;
      item.isEdit = true;
      state.editValue = item.name;
    };
    // 点击其他位置，退出编辑状态
    const mousedown = (e) => {
      if (myinput.value && !e.target !== myinput.value) {
        state.list[editIndex] = {
          name: state.editValue,
          checked: false,
          isEdit: false,
        };
      }
    };
    const state = reactive({
      value: "",
      editValue: "",
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

    return { ...toRefs(state), addel, showEdit, myinput, mousedown };
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
