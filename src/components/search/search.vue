<template>
  <section class="ygIndexTop ygIndexTopbrandShop" style="position: relative;">
    <form
      method="get"
      class="mallSearchform"
      name="mallSearchform"
      id="mallSearchform"
      _lpchecked="1"
      style="width: 70%;"
    >
      <div class="ygIndexTopM">
        <input
          @click="toSearchPage"
          id="ygIndexTopS"
          class="ygIndexTopS"
          name="kword"
          type="text"
          placeholder="请输入关键字"
        /><em id="resetInput" class="cleanInput" style="display: none;"></em>
        <input
          type="button"
          class="ygIndexTopSub"
          value=""
          style="display: none;"
        />
        <input type="button" class="ygIndexTopSubNo" value="" style="" />
      </div>
      <input type="hidden" value="" id="searchnode" name="node" />
      <input type="hidden" value="" id="keyword" name="keyword" />
    </form>
    <div class="ygIndexTopL">
      <a @click="toBrandPage()">
        <img src="../../img/new-back.png" class="topnewback" style="" />
      </a>
    </div>
    <div class="sitebar" @click="mainNavShow_2">
      <a id="mainnav"
        ><img src="../../img/ico-menu.png" width="20" alt="menu"
      /></a>
    </div>
  </section>
</template>
<script>
export default {
  name: "type",
  methods: {
    toSearchPage() {
      this.$router.push({ path: "/search" });
    },
    toBrandPage() {
      this.$router.back();
    },
    mainNavShow_2() {
      this.$store.commit("mainNavShow_2");
    }
  }
};
</script>
