<template>
<div>
<section class="srch_order">
    <div class="aList">
      <a href="javascript:void(0);"  class="zongHN" :class="{fst:offset==0}" @click="sortByCommon">综合</a>
    </div>
    <div class="aList">
      <a href="javascript:void(0);">销量</a>
    </div>
    <div class="aList" @click="sortByPrice($event)" >
      <a href="javascript:void(0);" :class="{fst:offset==2}">
        价格
        <span class="arrow">
          <img :src="arrowImgUrl" width="8" alt />
          <input id="hiddenPriceOrderBy" type="hidden" name="priceOrderBy" value="pa" />
        </span>
      </a>
    </div>
    <div class="aList">
      <a href="javascript:void(0);">新品</a>
    </div>
    <div class="aList">
      <a href="javascript:void(0);" id="cd-menu-trigger" style=" padding-left:0;">
        筛选
        <span class="arrow">
          <img class="shaiNA"
            src="//i1.ygimg.cn/pics/mobile/appointment/searchP/select.png"
            width="10" alt />
        </span>
      </a>
    </div>
  </section>
<div class="srch_result_list" ref="list">
	<ul id="nextPageData" class="srch_list clearfix">
		<li v-for="item in products" :key="item.productId">
            <section class="listW">
                <a href="javascript:;" :id="item.productId" @click="toDetailPage(item.productId)">
                    <img :src="item.imgUrl"  width="86" class="lazy" style="display: inline;">
                    <span class="topics_pname topics_pnameN">
						{{item.name}}</span>
                </a>
                <p>

			<span class="price">¥{{item.price}}</span>
                <del class="delPrice">{{item.delPrice==""?"":"¥"+item.delPrice}}</del>
                <del class="plusPrice">{{item.plusPrice==""?"":"¥"+item.plusPrice}}</del>
             </p>					
 			 <p class="saleInfo">
                  <span :class="{onSale:item.isOnSale}">{{item.isOnSale==true?'秒杀':''}}</span>
              </p>
            </section>
        </li>
	</ul>
</div>
</div>
</template>
<script>
import observer from "../../tool/observer"
import BScroll from 'better-scroll'
    import axios from 'axios'
    export default {
        name: 'Panel',
        data() {
            return {
                products: null,
                scroll: null,
                page:1,
                sortFlag: true,
                arrowImgUrl: '//i1.ygimg.cn/pics/mobile/appointment/searchP/gray.png',
                offset: 0,
                searchText:""
            }
        },
        methods: {
            getProducts(){
                let brandId = this.$route.params.brandId;
                return axios.get('http://10.3.142.130:8088/api/brand/'+brandId +'/'+this.page).then((res)=>{
                    this.products = res.data;
                })
            },
            toDetailPage(id) {
                this.$router.push({path:'/product/'+id});
            },
            sortByPrice(e){
                console.log(e);
                
                let products = Array.isArray(this.products) && this.products.sort((a,b) => {
                   return a.price - b.price
                });

                this.products = this.sortFlag==true?products:products.reverse()
                this.arrowImgUrl = this.sortFlag==true?'//i1.ygimg.cn/pics/mobile/appointment/searchP/up-red.png':'//i1.ygimg.cn/pics/mobile/appointment/searchP/down-red.png';
                this.offset = 2;
                this.sortFlag = !this.sortFlag;
            },
            sortByCommon(){
                this.offset = 0;
                this.$router.push({fullPath:window.location.href})
            }
        },
        created(){
            this.getProducts();
            this.$nextTick(() => {
                
                this.scroll = new BScroll(this.$refs.list,{
                    probeType:2,
                    pullUpLoad: true,
                    click: true
                });
                this.scroll.on('pullingUp',async () => {
                    this.page = this.page+1;
                    await this.getProducts()
                    await this.scroll.finishPullUp();
                })
            })
        },
        computed:{
          addComputed(){
            if (this.searchText) {
                return this.products.filter((item) => {
                    if (item.name.indexOf(this.searchText) != -1) {
                        return item
                    }
                })
            }
            else {
                return this.products
            }
          }
        },
        mounted(){
          observer.on("setSeatchText",(searchText) => {
            this.searchText = searchText;
          })
        }
    };
</script>
<style lang="scss">
    html,body {
     height: 100%;
    }
    #app {
        height: 100%;
    }
    .srch_result_list {
        position: relative;
        left: 0;
        top: 0;
        height: 100vh;
        overflow: hidden;
        li {
            height: 270px;
        }
    }
    .clearfix li span{
        line-height: 24px!important;
        height: 24px!important;
    }

body {
  background: #ffffff;
}
.topics_pname {
  display: block;
  text-align: left;
  padding: 0 5px;
  height: 32px;
  line-height: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.nomore {
  width: 100%;
  padding: 5px 0px;
  text-align: center;
}
.SuspensionCon {
  width: 40px;
  position: fixed;
  right: 10px;
  bottom: 50px;
  z-index: 900;
}
.topicsCar {
  display: block;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  background-image: url(http://m.yougou.com/images/listview/car-white.png);
  background-repeat: no-repeat;
  background-size: 60% auto;
  border-radius: 20px;
  background-position: center center;
  margin-bottom: 15px;
}
.topmove {
  display: block;
  width: 40px;
  height: 0px;
  background-color: rgba(0, 0, 0, 0.3);
  background-image: url(http://m.yougou.com/images/listview/top.png);
  background-repeat: no-repeat;
  background-size: 60% auto;
  border-radius: 20px;
  background-position: center center;
}
.srch_order a {
  border-left: none;
  color: #999;
  display: block;
  text-align: center;
  width: 20%;
}
.srch_order {
  padding-bottom: 1px;
  height: 36px;
}
.srch_order a i {
  width: 1px;
  display: block;
  height: 2.3em;
  float: right;
  background: #dddddd;
  margin-top: 0.3em;
}
.srch_list li {
  width: 47.4%;
  margin: 3px 0.8%;
}
body.modal-open {
  position: fixed;
  width: 100%;
}
.price {
  width: 47px;
  font-weight: 500;
  font-size: 14px;
  font-family: PingFangSC-Medium;
  color: rgba(253, 71, 101, 1);
}
del {
  width: 68px;
  height: 20px;
  font-size: 10px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 10px;
}
body.modal-open {
  position: fixed;
  width: 100%;
}
</style>