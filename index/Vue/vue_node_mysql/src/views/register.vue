<template>
  <form>
    <label for="username">账户:</label>
    <input type="text" v-model="username" id="username" required />
    <br />
    <label for="pwd">密码:</label>
    <input type="text" v-model="pwd" id="pwd" required />
    <br />
    <input type="submit" name="register" value="注册" @click="register()" />
    <div>{{ msg }}</div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      username: null,
      pwd: null,
      msg: null, //接收数据
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
