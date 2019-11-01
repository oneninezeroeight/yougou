<template>
  <div id="box">
    <Toubu>购物车</Toubu>
    <!-- <Gouwuche/> -->
    <!-- <Nospcart/> -->
    <Shopcart/>
    <Shopcartpay/>
  </div>
</template>

<script>
import Toubu from "@/components/find/toubu/toubu.vue";
// import Gouwuche from "@/components/gouwuche/gouwuche.vue";
// import Nospcart from "@/components/gouwuche/nospcart.vue";
import Shopcart from "@/components/gouwuche/shopcart.vue";
import Shopcartpay from "@/components/gouwuche/shopCartPay.vue";

export default {
  components: {
    Toubu,
    // Gouwuche,
    // Nospcart,
    Shopcart,
    Shopcartpay
  }
};
</script>