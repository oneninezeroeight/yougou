<template>
    <div id="weui">
        <div class="weui-tabbar taber">
            <router-link v-for="(item,index) in tagger" :key="index" @click="heightLheight(index)" href="javascript:;" :class="[
                'weui-tabbar__item', {'weui-bar__item_on':offset === index}]" :to="{name:item.url}">
                <span style="display: inline-block;position: relative;">
                    <img :src="item.imgUrl" alt="" class="weui-tabbar__icon">
                    <span v-if="item.dot" class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;" ></span>
                </span>
                <p id="title" v-text="item.title" class="weui-tabbar__label"></p>
                </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tagger:[
                {title:"首页",url:"contact",imgUrl:"http://m.yougou.com/images/indexNew/toolbar_home_selected.png"},
                {title:"分类",url:"type",imgUrl:"http://m.yougou.com/images/indexNew/toolbar_categories_normal.png"},
                {title:"发现",url:"discover",imgUrl:"http://m.yougou.com/images/indexNew/toolbar_discover_normal.png"},
                {title:"购物车",url:"cart",imgUrl:"http://m.yougou.com/images/indexNew/toolbar_shopcar_normal.png"},
                {title:"我的",url:"mine",imgUrl:"http://m.yougou.com/images/indexNew/toolbar_personal_normal.png"}
            ],
            offset:0
        }
    },
     methods: {
        heightLheight(index) {
            this.offset = index
            // observer.emit("setTabber", index)
            
        }
    }
}
</script>
<style scoped>
    .taber{
        position: fixed;
        width:100%;
        bottom:0px;
    }
</style>