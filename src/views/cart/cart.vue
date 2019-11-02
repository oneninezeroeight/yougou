<template>
  <div id="box">
    <Toubu>购物车</Toubu>
    <Gouwuche v-if="!$store.state.isLoggedin"/>
    <Nospcart v-if="!$store.state.isLoggedin"/>
    <Shopcart v-if="$store.state.isLoggedin"/>
  </div>
</template>

<script>
import Toubu from "@/components/find/toubu/toubu.vue";
import Gouwuche from "@/components/gouwuche/gouwuche.vue";
import Nospcart from "@/components/gouwuche/nospcart.vue";
import Shopcart from "@/components/gouwuche/shopcart.vue";

export default {
  components: {
    Toubu,
    Gouwuche,
    Nospcart,
    Shopcart,
  }
};
</script>