<template>
  <div id="sectionName">
    <div class="seckillArea">{{ title }}</div>
    <div class="swiper">
      <div v-for="(item, index) in tager" :key="index" class="newModules">
        <img class="swiperImg" :src="item.imgUrl" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "精选活动",
      tager: [
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/10/1571887474806.jpg"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/10/1571887423772.jpg"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/10/1571887502034.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
#sectionName {
  position: relative;
  top:1rem;
}
.swiper{
  overflow: scroll;
  display: flex;
}
.seckillArea {
  position: absolute;
  left: -0.3rem;
  width: 100%;
  font-size: 1rem;
  height: 2.533333rem;
  line-height: 2.533333rem;
}
.newModules {
  margin-top: 2.533333rem;
  height: 11.666667rem;
  background: #fff;
  flex:none;
}
.swiperImg {
  padding-left: 0.933333rem;
  height: 10.666667rem;
  width: 10rem;
}
</style>
