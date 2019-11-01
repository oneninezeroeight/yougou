<template>
  <div class="list">
    <div class="userList">
      <div class="userOrderCon userWallet clearfix">
        <a class="myYou" v-for="(item,index) in tagger" :key="index">
          <b>
            <img :src="item.img" />
          </b>
          <em>{{item.name}}</em>
        </a>
      </div>
    </div>

    <div class="userList">
      <div class="userOrderCon userWallet clearfix">
        <a v-for="(item,index) in tger" :key="index" class="myYou">
          <b>
            <img :src="item.img" />
          </b>
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
                {name:"用户中心",img:"http://m.yougou.com/images/myYG/member.png"},
                {name:"积分商城",img:"http://m.yougou.com/images/myYG/integration.png"},
                {name:"每日签到",img:"http://m.yougou.com/images//myYG/past.png"},
                {name:"联系客服",img:"http://m.yougou.com/images/myYG/service.png"}
            ],
            tger:[
                {name:"收藏/关注",img:"http://m.yougou.com/images/myYG/collection.png"},
                {name:"帮助中心",img:"http://m.yougou.com/images/myYG/help.png"},
                {name:"意见反馈",img:"http://m.yougou.com/images/myYG/suguession.png"}
            ]
        }
    }
}
</script>
<style scoped>
    .list{
        margin-top:0.5rem;
    }
</style>