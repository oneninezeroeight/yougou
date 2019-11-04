<template>
  <section id="brandShopWrapRight" class="brandShopWrapRight brandShopWrap">
    <section id="brandShopWrapLeft" class="brandShopWrapLeft brandShopWrap">
      <ul
        id="brandShopLeft"
        class="brandShopLeft"
        style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translateY(0px);"
      >
        <li
          v-for="(item, index) in leftTypes"
          :key="index"
          :class="{ shover: offset === index }"
          :classifyid="classifyids[index]"
          @click="changeOffset(index)"
        >
          {{ item }}
        </li>
      </ul>
    </section>
    <TypeRight :types="rightTypes" />
  </section>
</template>
<script>
import request from "../../common/axios";
import TypeRight from "./typeRight";
import observer from "../../tool/observer";
export default {
  data() {
    return {
      leftTypes: ["全部品牌", "女鞋", "男鞋", "运动", "户外", "童鞋童装"],
      classifyids: [
        "0b32ad4f00d24ce5a7ab06ba7f65277b",
        "d47c69aa99b34d17833f9cbbd3e8229c",
        "18e360faebea4ad593c013ce4246cb76",
        "076e46626fa74608bad3a68e9cfbcaad",
        "230a3bdb0af24b888d0e1a2d5255c11e",
        "489e5ee1b8f34a59bae8177db7ba565f"
      ],
      rightTypes: null,
      offset: 0,
      searchText: ""
    };
  },
  computed: {
    classifyid() {
      return this.classifyids[this.offset];
    }
  },
  mounted() {
    this.rightTypes = this.getClassifies(this.classifyids[0]);
  },
  watch: {
    async classifyid(newV) {
      this.getClassifies(newV);
    }
  },
  methods: {
    changeOffset(index) {
      this.offset = index;
    },
    async getClassifies(id) {
      let res = await request({
        method: "post",
        url: "/type/getClassifies.sc",
        params: { id }
      });
      this.rightTypes = res.data.cls;
    }
  },
  components: {
    TypeRight
  }
};
</script>
<style lang="scss">
#brandShopWrapRight {
  position: relative;
  top: 0;
  left: 0;
}
#brandShopWrapLeft {
  top: 0;
  .classifyTitle a {
    left: -17px;
  }
}
</style>
