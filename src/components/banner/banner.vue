<template>
  <div class="bannersen">
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hda">{{ title }}</div>
      <div class="weui-panel__bd">
        <div
          v-for="(item, index) in tagger"
          :key="index"
          class="weui-media-box__hd"
        >
          <img @click="toDetailPage(item.url)" class="weui-media-box__thumb" :src="item.imgUrl" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "热门分类",
      tagger: [
        {imgUrl:"https://i1.ygimg.cn/pics/mobile/homepage/2019/09/1568599199800.jpg",
        url:"251325c524a04a64ab1aea4d4e720020/1"},
        {imgUrl:"https://i1.ygimg.cn/pics/mobile/homepage/2019/09/1568599208206.jpg",url:"a6e6988063b84bdf8a443f5916bb1595/1"},
        {imgUrl:"https://i1.ygimg.cn/pics/mobile/homepage/2019/09/1568599215890.jpg",url:"d8705d2d9a3b4e3bbde9d1e498c3cd13/1"},
        {imgUrl:"https://i1.ygimg.cn/pics/mobile/homepage/2019/09/1568599229435.jpg",url:"cc4d24c41abc4acd8cb16b500e5324a0/1"},
        {imgUrl:"https://i1.ygimg.cn/pics/mobile/homepage/2019/09/1568599343367.jpg",url:"08b1bf6dc1434c34a1355244b922e7c1/1"},
        {imgUrl:"https://i1.ygimg.cn/pics/mobile/homepage/2019/09/1568599351453.jpg",url:"a640511a521d4d5cbe4f00fdc6ed7e84/1"},
        {imgUrl:"https://i1.ygimg.cn/pics/mobile/homepage/2019/09/1568599360680.jpg",url:"ab7095e1fa854670b2610b0dcf962426/1"},
        {imgUrl:"https://i1.ygimg.cn/pics/mobile/homepage/2019/09/1568599368269.jpg",url:"c2c61b92e30e4d30afe92cddb15bc6aa/1"}
      ]
    };
  },
    methods:{
    toDetailPage(id) {
                this.$router.push({path:'/brand/'+id});
            },
  }
};
</script>
<style scoped>
.bannersen {
  position:relative;
  /* top: 19.766667rem; */
}
.weui-panel__bd {
  display: flex;
  flex-wrap: wrap;
}
.weui-panel__hda {
  font-size: 15px;
  color: black;
  height: 2.4rem;
  line-height: 3rem;
  padding-left: 0.966667rem;
}
.weui-media-box__thumb {
  height: 5.013333rem;
  width: 5.7rem;
}
</style>
