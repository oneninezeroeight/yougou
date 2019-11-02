<template>
  <div id="box">
    <Toubu>我的优购</Toubu>
    <Module/>
    <Dingdan/>
    <Qianbao/>
    <List/>
    <Footerw></Footerw>
  </div>
</template>

<script>
import Toubu from "@/components/find/toubu/toubu.vue";
import Module from "@/components/my/module.vue";
import Dingdan from "@/components/my/dingdan.vue";
import Qianbao from "@/components/my/qianbao.vue";
import List from "@/components/my/list.vue";
import Footerw from "@/components/my/footerw.vue";

export default {
  components: {
    Toubu,
    Module,
    Dingdan,
    Qianbao,
    List,
    Footerw
  },
  mounted() {
    if(this.$store.state.isLoggedin == false) {
      this.$router.push({path: '/login'})
    }
  }
};
</script>
