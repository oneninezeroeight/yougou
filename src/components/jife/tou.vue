<template>
  <div>
    <header>
      <div class="lftarea">
        <a @click="gotarea"
          ><img src="https://m.yougou.com/images/ico-back.png" width="18" alt=""
        /></a>
      </div>
      <h2 class="title" id="tit">积分换券</h2>
      <div class="sitebar">
        <a @click="waptip" class="jswapdialog" dialogid="shuoming">说明</a>
        <a @click="mainNav" id="mainnav">
          <img
            src="https://m.yougou.com/images/ico-menu.png"
            width="20"
            alt="menu"
          />
        </a>
      </div>
    </header>

    <div v-show="foot" class="navmenu" id="ygnavmenu" style="display: block;">
      <div class="bd">
        <ul>
          <router-link
            v-for="(item, index) in menu"
            :key="index"
            tag="li"
            :to="{ name: item.url }"
          >
            <a v-text="item.name" class="item1"></a>
          </router-link>
        </ul>
      </div>
    </div>
    <div v-if="fooer">
      <div id="waptipBg" class="waptipBg"></div>
      <div class="waptip waptipNew" style="margin-top: -134.5px;">
        <div class="bd">
          <ul style="text-align:left;">
            <li>1.兑换前需要先绑定手机号；</li>
            <li>2.每天最多兑换3次；</li>
            <li>3.兑换的优惠券，含“优惠券”、“礼品卡”；</li>
            <li>4.兑换后仅限当前账户使用，不能转赠其他账户使用；</li>
            <li>5.兑换的优惠券，不能折算为现金；</li>
            <li>6.兑换成功之后，不能再兑换回积分，消费积分将不退回；</li>
          </ul>
        </div>
        <div class="ft">
          <span @click="waptip" class="btn_org only_btn_org" id="closeTip"
            >知道了</span
          >
        </div>
        <span @click="waptip" id="wrapOffBtn">×</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      foot: false,
      fooer: false,
      only: true,
      menu: [
        { name: "首页", url: "contact" },
        { name: "分类", url: "type" },
        { name: "购物车", url: "cart" },
        { name: "我的优购", url: "mine" }
      ]
    };
  },
  methods: {
    mainNav() {
      this.foot = !this.foot;
    },
    waptip() {
      this.fooer = !this.fooer;
    },
    gotarea() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.sitebar a {
  padding-top: 0.5rem;
  font-size: 0.3rem;
}
.navmenu .item1 {
  background: url(../../assets/homec.png) center 0.5rem no-repeat;
  background-size: 1.2rem auto;
}
.navmenu .bd a.item4 {
  background: url(../../assets/class.png) center 0.5rem no-repeat;
  background-size: 1.2rem auto;
}
.navmenu .item2 {
  background: url(../../assets/ico-shopcartc.png) center 0.5rem no-repeat;
  background-size: 1.2rem auto;
}
.navmenu .item3 {
  background: url(../../assets/ico-personc.png) center 0.5rem no-repeat;
  background-size: 1.2rem auto;
}
</style>
