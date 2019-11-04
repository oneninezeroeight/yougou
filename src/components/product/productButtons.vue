<template>
  <div
    class="prodtl_buy prodtl_buyNew prodtl_buyNew_have"
    style="display: block;"
  >
    <!-- 购物车立即购买 部分 -->
    <div class="backtop" style="display: none; opacity: 1;">
      <a href="javascript:;"></a>
    </div>
    <a
      class="collectN collect jsAddFav11"
      no="/my/addFavorite.sc?commodityNo=101306401"
      status="false"
      href="javascript:void(0)"
    >
      <img
        id="star"
        src="//i1.ygimg.cn/m/images/like.png"
        width="21"
        alt
        style="min-width:21px;"
      />
      <em>收藏</em>
    </a>
    <a
      class="car_brown"
      style="width:15.625%; margin:0; float:left;background:#fff "
    >
      <img
        src="//i1.ygimg.cn/m/images/detail_img/car1.png"
        width="20"
        alt
        @click="toCartPage"
      />
      <em>购物车</em>
    </a>
    <a
      @click="addToCart"
      class="btn_org btn_brown btn_brow_add"
      href="javascript:void(0)"
      id="addShop"
      >加入购物车</a
    >
    <a
      class="btn_org btn_org_buy btn_org_buy_now"
      href="javascript:void(0)"
      id="buy"
      >立即购买</a
    >
  </div>
</template>
<script>
import request from "../../common/axios";
import { getLocalStorage } from "../../common/store";
export default {
  data() {
    return {
      productId: "",
      token: ""
    };
  },
  methods: {
    addToCart() {
      if (this.token == undefined) {
        let flag = confirm("您还未登录! 想要跳转至登录页面吗");
        flag && this.$router.push({ path: "/login" });
        return;
      }
      request({
        method: "post",
        url: "/api/cartAdd",
        data: {
          token: this.token,
          productId: this.productId,
          margin: 1
        }
      }).then(res => {
        alert("加入购物车成功");
      });
    },
    toCartPage() {
      this.$router.push({ name: "cart" });
    }
  },
  mounted() {
    this.productId = this.$route.params.productId;
    this.token = getLocalStorage("user_session");
  }
};
</script>
<style lang="scss" scoped>
#addShop,
#buy {
  height: 45px;
  line-height: 45px;
}
</style>
