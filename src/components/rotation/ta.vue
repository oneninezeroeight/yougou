<template>
  <div>
    <template>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in taber" :key="index">
          <a href="#" target="_blank">
            <img :src="item.imgUrl" />
          </a>
        </swiper-slide>
        <div
          class="swiper-pagination swiper-pagination-bullets"
          slot="pagination"
        ></div>
      </swiper>
    </template>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Slider",

  data() {
    return {
      taber: [
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/09/1568008974410.jpg"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/10/1571729535467.jpg"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/09/1568008969382.jpg"
        }
      ],
      swiperOption: {
        autoplay: {
          //自动播放
          delay: 2500,
          disableOnInteraction: false
        },
        loop: true, //环装轮播
        pagination: {
          //分页
          el: ".swiper-pagination",
          clickable: true,
          renderBullet(index, className) {
            //自定义分页的按钮
            return `<span class="${className} swiper-pagination-bullet-custom"></span>`;
          }
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped>
.swiper-pagination-bullet-custom {
  width: 9px;
  height: 9px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  border-radius: 0;
  background: #fff;
}
.swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
  color: #fff;
  background: #a11703;
}
</style>
