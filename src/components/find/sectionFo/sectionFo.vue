<template>
  <div class="Info">
    <div class="ygIndexInfoT">
      <div class="ygIndexCountHourTi">
        <div class="ygIndexCountHourTiP">
          <p>时尚风向标</p>
        </div>
      </div>
    </div>

    <dl v-for="(item, index) in tagger" :key="index" class="ygIndexInfoDl">
      <a
        class="resetLink"
        apptype="1004"
        linkurl
        commonid="66f1290fd3054639b8b530b1f394ae7e"
      >
        <dt v-text="item.title"></dt>
        <dd class="ygIndexInfoDlI">
          <img :src="item.img" />
        </dd>
        <dd v-text="item.name" class="ygIndexInfoDlText"></dd>
      </a>
    </dl>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tagger: [
        {
          title: "思加图品牌日",
          img:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/10/1571888020017.jpg",
          name: "无限制30、468-60、698-120优惠券"
        },
        {
          title: "真美诗品牌日",
          img:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/10/1571888045678.jpg",
          name: "无限制30、468-60、698-120优惠券"
        },
        {
          title: "妙丽品牌日",
          img:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/10/1571888015633.jpg",
          name: "无限制30、468-60、698-120优惠券"
        },
        {
          title: "秋冬穿搭法则|再差的身材一双靴子就能拯救",
          img:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/11/1543375837774.jpg",
          name: "2018.11.28"
        },
        {
          title: "【更新】年末轰趴吸睛穿搭|8套礼盒一键搞定！",
          img:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/12/1545794198391.gif",
          name: "2018.12.26"
        },
        {
          title: "透过鞋品看穿你的潜在女子力，很准哦！",
          img:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/10/1539949249681.jpg",
          name: "2018.10.15"
        },
        {
          title: "李宇春最新代言OG潮牌，又玩跨界又创联名，666！",
          img:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/10/1539949305562.jpg",
          name: "2018.10.8"
        },
        {
          title: "刘雯、鹿晗、王嘉尔、春春同款原来都在这里",
          img:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/11/1541495279892.jpg",
          name: "2018.11.8"
        },
        {
          title: "浪起来！你还不懂的这些时髦套路",
          img:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/10/1540364455529.jpg",
          name: "2018.11.1"
        },
        {
          title: "嘻哈、说唱，文化这东西还得衣品说了算！",
          img:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/10/1539949418384.jpg",
          name: "2018.9.24"
        },
        {
          title: "谁比谁美丽？凹造型指南助你一臂之力！",
          img:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/10/1539949199648.jpg",
          name: "2018.10.22"
        },
        {
          title: "秋冬流行趋势盘点，看这一份就够了！",
          img:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/10/1539949785003.jpg",
          name: "2018.9.3"
        },
        {
          title: "大牌榜单最新放送！明星同款、街拍新宠看这里",
          img:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/10/1539949724243.jpg",
          name: "2018.9.10"
        },
        {
          title: "赶时髦、显瘦还舒适，秋冬你真的离不开它！",
          img:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/10/1539949848851.jpg",
          name: "2018.8.27"
        },
        {
          title: "Belle携手陈漫打造全新秋冬大片",
          img:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/10/1539950048669.jpg",
          name: "2018.8.20"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.Info {
  position: relative;
}
.ygIndexInfoT {
  padding-top: 20px;
}
.ygIndexInfoT .ygIndexCountHourTi {
  width: 50%;
}
.ygIndexCountHourTi {
  text-align: center;
  border-top: 1px solid #ccc;
  height: 20px;
  position: relative;
  width: 80%;
  margin: 0 auto;
}
.ygIndexInfoT .ygIndexCountHourTiP {
  top: -12px;
}
.ygIndexCountHourTiP {
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
}
.ygIndexInfoT .ygIndexCountHourTiP p {
  background-color: #eee;
  font-size: 15px;
  padding: 0 10px;
  font-weight: 400;
}
.ygIndexCountHourTiP p {
  display: inline-block;
  min-width: 1%;
  max-width: 80%;
  color: #333;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 5px;
  position: relative;
  white-space: normal;
  height: 18px;
  margin: 0 auto;
  font-size: 1.2rem;
}

.ygIndexInfoDl {
  margin-bottom: 18px;
}
.ygIndexInfoDl a {
  display: block;
  padding: 0 16px 10px;
  color: #333;
  background-color: #fff;
}
.ygIndexInfoDl dt {
  padding: 10px 0;
}
.ygIndexInfoDl dd.ygIndexInfoDlI {
  padding-bottom: 10px;
}
.ygIndexInfoDl dd img {
  width: 100%;
}
.ygIndexInfoDl a dd.ygIndexInfoDlText {
  color: #a0a0a0;
}
.ygIndexInfoDlText {
  max-height: 40px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
