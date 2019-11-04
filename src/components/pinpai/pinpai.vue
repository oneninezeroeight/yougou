<template>
  <div id="ygSwiperConTwo">
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__bd">
        <div
          v-for="(item, index) in tagger"
          :key="index"
          class="weui-media-box__hd"
        >
          <div @click="toDetailPage(item.ID)">
            <img class="weui-media-box__thumb" :src="item.imgUrl" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../common/axios";
import observer from "../../tool/observer";
export default {
  data() {
    return {
      tagger: [
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/09/1537253123662.png",
          ID: "d0ee8c391d6c42a8a9e2febd70b49088/1"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/09/1537253140328.png",
          ID: "7bb0218641de4b5c8fe496ff1ab7dc5d/1"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/09/1537253162890.png",
          ID: "688850fd81de46169074a1460ee6751d/1"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/09/1537253177953.png",
          ID: "d152277732ae47a988888f9b644fed4b/1"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/09/1537253203264.png",
          ID: "1b2ac4108fe449d28cb2839a37371711/1"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/09/1537253220254.png",
          ID: "61d4abb1a396420eadc56c013379f8a3/1"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/09/1537253238961.png",
          ID: "96d83f779f1f4de187b2309b899921f9/1"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/09/1537253257853.png",
          ID: "5bb4084e35554135b2988a7e2a73c4e9/1"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/09/1537253273217.png",
          ID: "ddd13c65b7904e85ad42f374b13cf1df/1"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/09/1537253289009.png",
          ID: "3c7e2ff562884fc9b498dfa6f76cbbfc/1"
        }
      ],
      searchText: ""
    };
  },
  methods: {
    getProducts() {
      let brandId = this.$route.params.brandId;
      return request({
        url: "/api/brand/" + brandId + "/" + this.page
      }).then(res => {
        this.products = res.data;
      });
    },
    toDetailPage(id) {
      this.$router.push({ path: "/brand/" + id });
    }
  }
};
</script>
<style scoped>
#ygSwiperConTwo {
  position: relative;
}
.weui-panel__bd {
  display: flex;
  flex-wrap: wrap;
}
.weui-media-box__thumb {
  height: 4rem;
  width: 4.6662rem;
}
</style>
