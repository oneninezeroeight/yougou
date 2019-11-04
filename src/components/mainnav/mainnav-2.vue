<template>
  <div class="navmenu" id="ygnavmenu" v-show="$store.state.isMainNavShown_2">
    <div class="bd">
      <ul>
        <li
          v-for="(item, index) in tabPath"
          :key="item"
          @click.prevent="toPage(index)"
        >
          <a :class="className[index]">{{ tabName[index] }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabPath: ["/", "/type", "/cart", "/mine"],
      className: ["item1", "item4", "item2", "item3"],
      tabName: ["首页", "分类", "购物车", "我的优购"]
    };
  },
  methods: {
    toPage(index) {
      this.$router.push({ path: this.tabPath[index] });
    }
  }
};
</script>
