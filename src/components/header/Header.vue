<template>
  <div>
    <section class="ygIndexTop ygIndexTopFixed ygIndexTopNew">
      <header v-show="fool" @click="openOff" id="openApp_header">
        <img
          class="open_off"
          id="close"
          src="//i2.ygimg.cn/pics/mobile/appointment/indexNicon/close_ Down.png"
        />
        <div class="open_now">
          <div class="logoWrap">
            <img
              src="//i2.ygimg.cn/pics/mobile/appointment/indexNicon/logo_Down.png"
            />
          </div>
          <div class="siteName">
            <ul>
              <li>{{ title }}<br />{{ name }}</li>
            </ul>
          </div>
          <div class="downNow" onclick="openYGApp(null,switchAppDownload);">
            {{ nameNow }}
          </div>
        </div>
      </header>
      <form
        action="/search.sc"
        method="get"
        class="mallSearchform"
        name="mallSearchform"
        id="mallSearchform"
      >
        <input type="hidden" name="entry" value="search" />
        <transition name="fade">
          <div class="ygIndexTopM" style="" ref="top">
            <div class="logoW"></div>
            <a href="http://localhost:8080/search">
              <input
                id="ygIndexTopS"
                oninput="ygIndex.ygSearchKeyDown()"
                class="ygIndexTopS"
                name="kword"
                type="text"
                placeholder=""
                defaultlink=""
              />
            </a>
            <em class="iconOnly"></em>
            <em id="resetInput" class="cleanInput"></em>
            <input
              type="button"
              class="ygIndexTopSub"
              value=""
              style="display:none"
            />
            <div class="ygIndexInfo">
              <router-link
                :to="{ name: 'xiaoxi' }"
                onclick="javascript:_hmt.push(['_trackEvent', '首页点击消息统计', 'click', 'indexGoMessage']);"
                >消息
              </router-link>
            </div>
          </div>
        </transition>
      </form>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fool: true,
      title: "打开客户端",
      name: "领取新人专属礼包",
      nameNow: "立即打开"
    };
  },
  // 注册事件
  methods: {
    // 点击X隐藏
    openOff() {
      this.fool = !this.fool;
    }
  },
  // 监滚动事件
  mounted() {
    let _this = this;
    window.onscroll = function(e) {
      _this.$refs.top.style.background = "red";
      _this.$refs.top.style.opacity = ".8";
      _this.$refs.top.style.height = "40px";

      if (window.scrollY == 0) {
        _this.$refs.top.style.background = "#333";
        _this.$refs.top.style.background = "";
      }
    };
  }
};
</script>
<style lang="scss">
.fade-enter-active {
  transition: all 5s ease-in;
}
</style>
