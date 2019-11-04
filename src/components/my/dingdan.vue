<template>
  <div>
    <div class="userList">
      <a
        class="userOrderLink ref_wddd"
        href="/my/myorderlist.sc?status=all&amp;node=A_WD_WDDD"
      >
        我的订单
        <em>全部订单</em>
      </a>
      <div class="userOrderCon userOrderConThree clearfix">
        <a v-for="(item, index) in tagger" :key="index">
          <b>
            <img :src="item.imgUrl" />
          </b>
          <em>{{ item.name }}</em>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tagger: [
        { name: "待付款", imgUrl: "http://m.yougou.com/images/myYG/pay.png" },
        {
          name: "查看物流",
          imgUrl: "http://m.yougou.com//images/myYG/logistics.png"
        },
        {
          name: "待评价",
          imgUrl: "http://m.yougou.com//images/myYG/evaluate.png"
        }
      ]
    };
  }
};
</script>
