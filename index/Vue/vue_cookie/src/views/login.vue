<template>
  <div>
    <form action>
      <div>
        账号：
        <input type="text" v-model="name" />
      </div>
      <div>
        密码：
        <input type="password" v-model="pwd" />
      </div>
      <div>
        <button @click.prevent="login()" type="submit">登录</button> 
      </div>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: "",
      pwd: ""
    };
  },
  methods: {    
    login() {
        if (!this.name) {
          alert("请填写账号");
          return;
        }
        if (!this.pwd) {
          alert("请输入密码");
          return;
        }
        if(this.pwd&&this.name) {
          // 以json格式传给setCookie方法存入信息,方法里面会循环遍历该json以单个数据存储的方式，多次存入cookie中　　　　　　// 注：cookie不支持直接以json的方式存入
          let loginInfo = {
						loginname:this.name,
						// openid:用户为中心的数字身份识别框架,唯一
            openId:"openId" + this.name
					}
					console.log(loginInfo);
          // 调用setCookie方法，同时传递需要存储的数据，保存天数
          this.cookie.setCookie(loginInfo,3)
					// alert("登录成功")
					console.log('登录成功');
          // 跳转到首页
          this.$router.replace('/')
        }
    }
  }
};
</script>