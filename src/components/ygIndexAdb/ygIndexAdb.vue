<template>
  <div id="refWz" ref="refWz">
    <div id="f1">
      <div class="ygIngexAdb">{{ title }}</div>

      <div v-for="(item,index) in floor" :key="index" class="sen-new-brand">
        <div class="sen-new-brand-img">
          <img id="brand" :src="item.bigImgUrl" />
        </div>
        <div class="swiper-container" :ref="'swiper'+index" >
          <ul class="swiper-ul">
            <li v-for="(item,index) in item.items" :key="index" class="container">
              <span :class="{tag:item.tag}">{{item.tag}}</span>
              <img class="container-img" :src="item.imgUrl"/>
              <p class="swiper-price">
                <span v-text="'￥'+item.price" class="price"></span>
                <del v-text="'￥'+item.delPrice" class="delprice"></del>
              </p>
            </li>
            <li class="ygSwiperSlide more-area ygSwiperSlideShow">
							<a id="SlideShow">
                <div class="more">
                  <p>查看更多</p>
                  <p>MORE+</p>
                </div>
              </a>
						</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Footer from "../footer/footer"
import axios from "axios";
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      title: "品牌专区",
      page: 26,
      floor:[],
      scroll: null,
      scroll_1: null,
    };
  },
  methods: {
    getFloor() {
      
      return axios
        .get("http://10.3.142.130:8088/api/floor/"+this.page)
        .then(data => {
          this.floor = data.data
        });
    },
    
  },
  mounted(){
    this.getFloor();
  }
};
</script>
<style lang="scss" scoped>
#refWz {
  position: relative;
  top:1.3rem;
}
#f1 {
  height: 100%;
  width: 100%;
}
.ygIngexAdb {
  height: 2.533333rem;
  line-height: 2.533333rem;
  font-size: 15px;
  background: #fff;
}
.sen-new-brand {
  height: 20rem;
  margin-bottom:0.5rem
}
.sen-new-brand-img {
  height: 10rem;
}
#brand{
  height: 10rem;
  width:100%;
}
.swiper-container{
  overflow: hidden;
}
.swiper-ul{
  display: flex;
  overflow-x: scroll;
  padding-bottom:10.5rem;
}
.container {
  flex: none;
  height: 10rem;
  width: 7rem;
  background:#fff;
}
.swiper-container .container .tag {
  display: inline-block;
  height: 1.5rem;
  width: 2rem;
  font-size: .186667rem;
  text-align: center;
  line-height: 1.5rem;
  background: red;
  margin-left: 4rem;
  color:#fff;
}
.container .container-img {
  height: 6rem;
  width: 6rem;
}
.swiper-price {
  height: 2.5rem;
  width: 6rem;
  text-align: center;
}
.swiper-price .price {
  display: inline-block;
  height: 1.5rem;
  width: 2rem;
  color:#333;
  line-height: -3rem;
  margin-top: 0.5rem;
}
.swiper-price .delprice {
  display: inline-block;
  height: 1.5rem;
  width: 3rem;
  line-height: -3rem;
  margin-top: 0.4rem;
}
.ygSwiperSlide>a {
    display: block;
    width: 7rem;
    text-align: center;
    height:7rem;
    padding-top:3rem;
}
.ygSwiperSlideShow{
  background:#fff;
}
</style>
