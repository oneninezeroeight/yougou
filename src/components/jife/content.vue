<template>
  <div>
    <div class="content">
      <div class="main">
        <section class="exchanges">
          <dl style="padding-top:10px;" class="cardList">
            <dd v-for="(item, index) in tagger" :key="index" class="coupons">
              <p>
                <span></span>
                <span>
                  <em>{{ item.m }}</em
                  >{{ item.price }}
                </span>
                <span>
                  <b>{{ item.name }}</b>
                </span>
              </p>
              <p>
                <strong>{{ item.title }}</strong>
                <time>{{ item.deta }}</time>
                <a>{{ item.classname }}</a>
              </p>
            </dd>
          </dl>
        </section>
        <p class="loadmore">没有更多</p>
        <a href="javascript:void(0)" class="movetop"></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tagger: [
        {
          m: "￥",
          price: "120",
          name: "满698元可用",
          title: "思加图 真美诗 妙丽 接券商品可用 10月29日10点-11月1日10点",
          deta: "有效期至2019-11-01 10:00",
          classname: "20积分兑换"
        },
        {
          m: "￥",
          price: "60",
          name: "满468元可用",
          title: "思加图 真美诗 妙丽 接券商品可用 10月29日10点-11月1日10点",
          deta: "有效期至2019-11-01 10:00",
          classname: "20积分兑换"
        },
        {
          m: "￥",
          price: "30",
          title: "思加图 真美诗 妙丽 接券商品可用 10月29日10点-11月1日10点",
          deta: "有效期至2019-11-01 10:00",
          classname: "20积分兑换"
        }
      ]
    };
  }
};
</script>
<style scoped>
em {
  font-style: normal;
  font-size: 1rem;
}
.content {
  width: 100%;
  height: 100%;
  position: relative;
  left: 0px;
  top: 0px;
  overflow-x: hidden;
  background: #ffffff;
}
.main {
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;
  padding-bottom: 20px;
}
.exchanges .cardList {
  padding: 10px 18px 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.exchanges .coupons {
  background: url(//i1.ygimg.cn/pics/mobile/appointment/integralPic/1.jpg);
  background-repeat: no-repeat;
  float: left;
  height: 8rem;
  width: 100%;
  margin-bottom: 12px;
  background-size: 100% 100%;
}
.exchanges dd p:nth-child(1) {
  width: 45%;
  position: relative;
  float: left;
  margin-left: -1.4rem;
  color: #df3736;
}
.exchanges dd p:nth-child(1) span:nth-child(2) {
  margin: 1em 0em 0em 1em;
  font-style: normal;
  color: #fff;
  font-size: 38px;
  float: left;
  padding-top: 0.5rem;
}
.exchanges dd p:nth-child(1) span:nth-child(3) {
  font-size: 12px;
  text-align: center;
  display: block;
  text-align: left;
  clear: both;
  padding-left: 1.8rem;
  color: #fff;
  padding-left: 3rem;
  padding-top: 1rem;
}
.exchanges dd p:nth-child(2) {
  width: 55%;
  position: relative;
  padding-bottom: 1.7rem;
  margin-left: 43%;
}
.exchanges dd p:nth-child(2) strong {
  width: 100%;
  color: #000000;
  font-size: 0.3rem;
  display: block;
  height: 2rem;
  line-height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: normal;
  margin-top: 2rem;
}
.exchanges dd p:nth-child(2) time {
  margin-top: 0.5rem;
  text-align: left;
  color: #ccc;
  border-bottom: 1px dashed #f3f3f3;
  line-height: 1rem;
  display: block;
  font-size: 0.4rem;
}
.exchanges dd p:nth-child(2) a {
  display: inline-block;
  padding: 0px 6px;
  height: 1.2rem;
  line-height: 1.2rem;
  border: 1px solid;
  border-radius: 1rem;
  position: absolute;
  right: 1rem;
  bottom: 0.3rem;
  color: #f6659a;
  border-color: rgba(245, 101, 154, 1);
}
.loadmore {
  width: 100%;
  float: left;
  color: #666666;
  text-align: center;
  font-size: 0.3rem;
}
</style>
