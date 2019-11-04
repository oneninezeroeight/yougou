<template>
  <header>
    <div class="lftarea">
      <a href="javascript:;" @click="toBack"
        ><img src="http://m.yougou.com/images/new-back.png" width="15" alt=""
      /></a>
    </div>
    <h2 class="title">登录</h2>
  </header>
</template>
<script>
export default {
  methods: {
    toBack() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>
