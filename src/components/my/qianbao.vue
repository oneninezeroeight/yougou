<template>
  <div id="qian">
    <div class="userList myWallet">
      <a class="userOrderLink" href="javascript:;">我的钱包</a>
      <div class="userOrderCon userOrderConThree clearfix">
        <a v-for="(item,index) in tagger" :key="index">
          <b>{{item.number}}</b>
          <em>{{item.name}}</em>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            tagger:[
                {name:"礼品卡",number:"0"},
                {name:"优惠券",number:"4"},
                {name:"积分",number:"80"}
            ]
        }
    }
}
</script>
<style scoped>
    #qian{
        margin-top:0.5rem;
    }
</style>