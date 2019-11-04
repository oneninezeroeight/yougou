<template>
  <div class="screen_wrap">
    <LoginHeader />
    <LoginType />
    <loginOther />
    <loginFoot />
  </div>
</template>
<script>
import LoginHeader from "../../components/login/loginHeader";
import LoginType from "../../components/login/loginType";
import loginOther from "../../components/login/loginOther";
import loginFoot from "../../components/login/loginFoot";
// import { removeLocalStorage } from "../../common/store";
import store from "store";
export default {
  // name,
  mounted() {
    store.remove("user_session");
    this.$store.commit("enLogIn", false);
  },
  components: {
    LoginHeader,
    LoginType,
    loginOther,
    loginFoot
  }
};
</script>
