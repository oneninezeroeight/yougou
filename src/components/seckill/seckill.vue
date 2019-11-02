<template>
  <div id="sen-seckill">
    <div class="left">
      <img
        class="leftimg"
        src="https://i1.ygimg.cn/pics/mobile/homepage/2018/12/1545122987899.jpg"
      />
    </div>
    <div class="right">
      <div class="weui-panel weui-panel_access">
        <div class="weui-panel__bd">
          <a
            v-for="(item, index) in tagger"
            :key="index"
            href="javascript:void(0);"
            class="weui-media-box weui-media-box_appmsg"
          >
            <div class="weui-media-box__bd">
              <h5 class="weui-media-box__title" v-text="item.title"></h5>
              <p class="weui-media-box__desc" v-text="item.name"></p>
              <p class="seckillFont" v-text="item.className"></p>
              <p class="goFont" v-text="item.goFont"></p>
            </div>
            <div class="weui-media-box__hd">
              <img class="weui-media-box__thumb" :src="item.url" alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tagger: [
        {
          title: "爆款限时秒杀",
          name: "鞋靴特卖",
          className: "爆款秒杀",
          goFont: "Go>",
          url:
            "http://i2.ygimg.cn/pics/teenmix/2019/101254654/101254654_01_mb.jpg?4"
        },
        {
          title: "",
          name: "运动休闲",
          className: "好货限量",
          goFont: "Go>",
          url:
            "http://i2.ygimg.cn/pics/adidasclassic/2019/101232205/101232205_01_mb.jpg?3"
        }
      ]
    };
  }
};
</script>
<style scoped>
#sen-seckill {
  position: relative;
  /* top: 42.4rem; */
  display: flex;
}
.left {
  display: flex;
}
.leftimg {
  height: 12.933333rem;
  width: 12.333333rem;
}
.right {
  height: 12.933333rem;
  width: 11.033333rem;
}
.seckillFont {
  color: #666;
}
.goFont {
  margin-top:-0.5rem;
  color: #666;
}
.weui-panel__bd{
  height:12.9rem;
  margin-top:1rem;
  margin-left:0.5rem;
}
.weui-media-box{
  height:5.9rem;
}
.weui-media-box__desc {
  color: #9446ff;
  font-size: 0.966667rem;
}
</style>
