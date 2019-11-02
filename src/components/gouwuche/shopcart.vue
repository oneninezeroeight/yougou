<template>
    <div>
        <keep-alive>
        <div id="shopcart1" class="shopcart1 shopcart shopcarts" data-car="0"
        style="margin-bottom: 8px;" ref="shopCart">
            <div class="checkallTitle">
                <p class="shopCartPayCW checkshop clearfix">
                    <span @click="checkShop" :class="['shopCartPayC', {shopCartCheckH:isShopCheck}]">
                        <input id="shopCartCIdC1" class="shopCartC shopCartCH" type="checkbox"
                        shoppingcarttype="cny" checked="checked"/>
                    </span>
                    <em>
                        百丽优购
                        <label for="shopCartCId"></label>
                    </em>
                </p>
            </div>
            <div v-for="(item,index) in cartList" :key="item.productId"   class="module module_change">
                <div class="pro_item pro_item_change ad">
                    <span  @click="checkItem(index)"
                        
                        :productno="item.id" :class="['shopCartCheck', {shopCartCheckH : item.isItemCheck}]" >
                    </span>
                    <div class="title">
                        <p>
                        <a href="javascript:;" @click="toDetailPage(item.productId)">
                           {{item.name}}
                            &nbsp;
                        </a>
                        </p>
                    </div>
                    <div class="cnt clearfix" >
                        <div class="pro_img">
                            <a  href="javascript:;">
                                <img @click="toDetailPage(item.productId)" :src="item.imgUrl"  width="95" height="95"
                                :alt="item.name"/>
                            </a>
                        </div>
                        <div class="info">
                            <ul class="shopInfoUl">
                                <li class="clearfix">
                                    <span class="price priceRiht">¥{{item.price}}</span>
                                </li>
                                <li>
                                    发货：
                                    百丽优购
                                </li>
                            </ul>
                            <input class="_productListDsp" value="101303915003,1" type="hidden" />
                            <p class="shopCartCount clearfix">
                                <!-- 减按钮 -->
                                <a :class="['shopCountMinus','shopCountMinus_minus', {shopCountMPNo: item.number==1}]" @click="itemCountChange(item.productId,index,-1)" href="javascript:;"></a>
                                <input type="text" class="shopCountN" 
                                readonly="readonly" min="1" max="10"  :value="item.number"/>
                                <!-- 加按钮 -->
                                <a @click="itemCountChange(item.productId,index,1)"  class="shopCountPush shopCountPush_add" href="javascript:;"></a>
                                <!-- 删除按钮 -->
                                <span @click="delItem(item.productId,$event)" class="delpro shopProDel"></span>
                            </p>
                            <div v-if="wapip" id="waptipBg" class="waptipBg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    
        
        </keep-alive>
        <div class="shopCartPayWa">
            <div class="shopCartPayCon">
            <div class="shopCartInfo clearfix">
            <div class="shopCartPayCW clearfix">
                <!-- 店铺全选按钮 -->
                <span @click="checkShop" :class="['shopCartPayC',{shopCartCheckH: isShopCheck }]"><input id="shopCartCId" class="shopCartC shopCartCH" type="checkbox" checked="checked"></span><em>全部</em>
            </div>
            <!-- 全选按钮 -->
            <p id="shopCartNumbF" class="shopCartNumb"><span class="shopCartSpan">总计：<em class="shopCartNumbEm">￥<i id="shopCartNumbEm">{{countPrice}}</i></em> <i class="shopCartNumbSpan">(不含运费)</i></span>
                <span class="shopCartSpan shopCartSpanT">
                </span>
            </p >
            </div>
            <input id="shopCartSubmit" class="shopCartSubmitone" type="submit" :value="'去结算('+checkedItemCount+')'" name="checkout" style="" tradecurrency="cny" datacarone="0">
            </div>
        </div>

    </div>
</template>
<script>
import axios from 'axios';
import store from 'store'
export default {
    data(){
        return {
            cartList:[],
            isShopCheck: false,
        }
    },
    methods:{
        toDetailPage(id) {
            this.$router.push({path:'/product/'+id})
        },
        delItem(id,e) {
            axios.post('http://10.3.142.130:8088/api/cartDelete', {
                token: this.token,
                productId: id
            })
            console.log(e.target.parentNode.parentNode.parentNode.parentNode);
            
            this.$refs.shopCart.removeChild(e.target.parentNode.parentNode.parentNode.parentNode.parentNode)
        },
        itemCountChange(id,index,margin) {
            
            if(margin == -1 && this.cartList[index].number ==1) {
                return;
            }
            axios.post('http://10.3.142.130:8088/api/cartAdd',{
                token: this.token,
                productId: id,
                margin
            });
            this.cartList[index].number += margin;
        },
        checkItem(index) {
            this.cartList[index].isItemCheck = !this.cartList[index].isItemCheck;
            if(this.cartList.every((item) => item.isItemCheck==true)) {
                this.isShopCheck = true;
            }else if(this.cartList.some((item) => item.isItemCheck == false)) {
                this.isShopCheck = false;
            }
        },
        checkShop() {
            this.isShopCheck = !this.isShopCheck;
                for(let i = 0;i<this.cartList.length;i++) {
                    this.cartList[i].isItemCheck =this.isShopCheck
                }
            
        }
    },
    computed:{
        token(){
            // return '1'; 
            return store.get('user_session');
        },
        checkedItemCount(){
            return this.cartList.reduce((accumulator,curVal) => {
                if(curVal.isItemCheck == true) {
                    return accumulator + curVal.number
                }
            },0) || 0;
        },
        countPrice(){
            return this.cartList.reduce((accumulator,curVal) => {
                if(curVal.isItemCheck == true) {
                    return accumulator + curVal.price * curVal.number
                }
            },0) || 0;
        }
    },
    async mounted(){
        let cartList = await axios.get('http://10.3.142.130:8088/api/getCart',{params: {
            token: this.token
        }});
        this.cartList = cartList.data.map((item) => Object.assign(item,{isItemCheck: false}));
        
    }
}
</script>




