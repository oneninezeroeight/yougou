<template>
  <div class="prodtl_hd">
    <div class="d_item prodtl_info">
      <div class="hd"><div class="pro_img tac rel">
          <carousel class="index-carousel" :autoplay="true" :minSwipeDistance="4000" :scrollPerPage="true" :speed="2000" :perPage="1" :paginationPadding="5" :paginationSize="5" :loop="true">
    <slide class="good" v-for="(item,index) in taber" :key="index">
        <div>
            <img :src="item"  alt="">
        </div>
    </slide>
</carousel>
        </div>
      </div>
      <div class="bd huodong huodongN">
        <div class="titleW">
          <h1>{{product.name}}</h1>
        </div>
        <div class="sellProPoint"></div>
        <ul class="pro_sku">
          <li class="proSalePrice">
            <span class="price">¥{{product.price}}</span>
          </li>
          <li class="plusPrice" v-if="product.plusPrice">
            <span class="price">
              <em>{{product.plusPrice}}</em>
              <img src="//i1.ygimg.cn/m/images/plus-small.png" width="33" alt />
            </span>
          </li>
          <li class="marketprice">
            <del>¥{{product.delPrice}}</del>
          </li>
          <li class="proJuanSend canCoupon" style="display: block;">
            <span>{{isSupportCoupon==true?'可用优惠券':'不可以优惠券'}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import {Carousel, Slide} from 'vue-carousel';
export default {
  data(){
      return {
        product: null,
        banners: null,
        isSupportCoupon: false,
        baseImgUrl:''
      }
  },
  components:{
    Carousel,
    Slide
  },
  computed: {
      productId(){
          return this.$route.params.productId
      },
      taber(){
          return Array.isArray(this.banners)&& this.banners.map((value,index) => {
              return this.baseImgUrl.replace('1_mb',index+1+'_mb')
          })
      }
  }
  ,
  methods: {
      getDetail(){
          axios.get('http://10.3.142.130:8088/api/product/'+this.productId).then((res)=>{
              this.product = res.data[0];
              this.baseImgUrl = res.data[0].imgUrl;
          })
      },
      getBanners() {
          axios.get('http://10.3.142.130:8088/product/getCommodityDetail.sc?cNo='+this.productId).then((res)=> {
              this.isSupportCoupon = res.data.isSupportCoupon;
              this.banners= Object.keys(res.data.inventory)
          })
      }
  },
  created(){
      this.getDetail();
      this.getBanners();
  }
};
</script>
<style lang="scss" scoped>
  .price {
    width: auto;
  }
  .proJuanSend {
    font-size: .75em
  }
</style>