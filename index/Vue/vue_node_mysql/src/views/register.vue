<template>
  <form>
    <label for="username">账户:</label>
    <input type="text" v-model="username" id="username" />
    <br />
    <label for="pwd">密码:</label>
    <input type="text" v-model="pwd" id="pwd" />
    <br />
    <button @click.prevent="register">注册</button>
    <div>{{ msg }}</div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      pwd: "",
      msg: "", //接收数据
    };
  },
  methods: {
    register() {
      this.$axios
        .post(this.HOST + "/api/register", {
          username: this.username,
          password: this.pwd,
        })
        .then((result) => {
          console.log(result.data);
          this.msg = result.data.msg;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
