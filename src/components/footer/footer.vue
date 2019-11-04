<template>
  <div id="loginBar">
    <div class="loginbar">
      <span class="loginSpan">
        <router-link :to="{ name: 'login' }">
          <a class="loginLink">登录</a>
          <em>|</em>
          <a class="loginLink">{{ name }}</a>
        </router-link>
      </span>
      <p class="loginP1">
        <a href="https://www.yougou.com" class="p">电脑版</a>
        <a class="p">客户端</a>
        <a class="p">微信</a>
      </p>
    </div>
    <div class="version">
      <p class="footerInfor">百丽国际旗下购物网站</p>
      <p class="footerInfor1">Copyright © 2011-2018 优购 m.yougou.com</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "登录",
      name: "注册"
    };
  },
  methods: {
    loadComments() {
      let list = localStorage.getItem("user_session");
      this.username = list;
      let key = this.username;
      const token = Buffer.from(key).toString("utf8");
      console.log(token);
    }
  },
  created() {
    this.loadComments();
  }
};
</script>
<style scoped>
#loginBar {
  position: relative;
  height: 13rem;
  width: 100%;
  top: 1rem;
  z-index: 1000;
}
.loginbar {
  height: 3rem;
}
.loginSpan {
  position: absolute;
  display: inline-block;
  margin-left: -1rem;
  height: 3rem;
  width: 6rem;
  font-size: 15px;
}
.loginSpan .loginLink {
  display: inline-block;
  height: 1.2rem;
  width: 2.5rem;
  font-size: 0.4rem;
}
.loginP1 {
  position: absolute;
  margin-right: 0;
  height: 3rem;
  width: 16.5rem;
  margin-left: 6rem;
  /* font-size: 15px; */
}
.version {
  height: 10rem;
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
}
.footerInfor {
  margin-top: -0.3rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 0.3rem;
  color: #a0a0a0;
}
.footerInfor1 {
  margin-top: -0.9rem;
  height: 3rem;
  font-size: 0.4rem;
  color: #a0a0a0;
}
</style>
