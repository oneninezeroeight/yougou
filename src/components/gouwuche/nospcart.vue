<template>
  <div>
    <section>
      <div class="NoSpCart">
        <div class="NospCartHT">
          <span>
            <img
              src="http://m.yougou.com/images/card-recommend.png"
              width="18"
              alt=""
            />为你推荐
          </span>
        </div>
        <div class="srch_result_list">
          <ul id="nextPageData" class="srch_list clearfix">
            <li v-for="(item, index) in tagger" :key="index">
              <section class="listW">
                <a onclick="linkTj(this)">
                  <img
                    :src="item.img"
                    data-original=""
                    width="86"
                    class="lazy"
                    style="display: inline;"
                  />
                  <span
                    class="topics_pname topics_pnameN"
                    v-text="item.title"
                  ></span>
                </a>
                <p>
                  <span class="price" v-text="item.price"></span>
                  <del class="delPrice" v-text="item.delPrice"></del>
                </p>
              </section>
            </li>
          </ul>
          <div class="NospCartFT"><p id="no_more">没有更多了</p></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tagger: [
        {
          img:
            "http://i2.ygimg.cn/pics/asics/2018/101025588/101025588_01_s.jpg?3",
          title: "asics亚瑟士 男子GEL-NIMBUS 20跑步鞋T800N-400",
          price: "¥879",
          delPrice: "¥1290"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/basto/2017/100540999/100540999_01_s.jpg?2",
          title: "BASTO/百思图秋季黑色羊皮简约通勤系带尖头中空女凉鞋TS808CK7",
          price: "¥229",
          delPrice: "¥998"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/adidasclassic/2018/100987186/100987186_01_s.jpg?3",
          title: "adidas Originals阿迪三叶草男子TREFOIL T-SHIRT圆领短T恤DH5777",
          price: "¥249",
          delPrice: "¥249"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/adidas/2018/100914931/100914931_01_s.jpg?5",
          title: "adidas阿迪达斯2019男子QUESTAR RIDEPEDB1345",
          price: "¥315",
          delPrice: "¥699"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/reebok/2018/101001131/101001131_01_s.jpg?3",
          title: "Reebok锐步男子CLUB C 85 MU休闲鞋CN3924",
          price: "¥349",
          delPrice: "¥699"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/adidasneo/2018/100990017/100990017_01_s.jpg?3",
          title: "adidas neo阿迪休闲男子M CE GRA TEE圆领短T恤DM4285",
          price: "¥69",
          delPrice: "¥129"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/basto/2017/100508176/100508176_01_s.jpg?3",
          title: "BASTO/百思图夏季专柜同款黑色羊绒皮流苏绑带一字女凉鞋TCT03BL7",
          price: "¥211",
          delPrice: "¥799"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/adidasclassic/2018/100987049/100987049_01_s.jpg?8",
          title:
            "adidas Originals阿迪三叶草2019女子3 STRIPES TEE圆领短T恤DH3188",
          price: "¥169",
          delPrice: "¥299"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/adidasclassic/2018/100990372/100990372_01_s.jpg?3",
          title:
            "adidas Originals阿迪三叶草中性DEERUPT RUNNERFOUNDATION休闲鞋B41768",
          price: "¥799",
          delPrice: "¥799"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/adidasclassic/2015/100131900/100131900_01_s.jpg?11",
          title: "adidas阿迪三叶草2019新款中性贝壳头鹿晗同款经典鞋C77124",
          price: "¥599",
          delPrice: "¥799"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/onitsukatiger/2018/101025896/101025896_01_s.jpg?3",
          title: "Onitsuka Tiger鬼冢虎 2019新款中性GSM休闲鞋D5K2Y-101",
          price: "¥409",
          delPrice: "¥690"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/nike/2018/100990775/100990775_01_s.jpg?10",
          title: "Nike耐克中性NIKE FLYKNIT TRAINER跑步鞋AH8396-202",
          price: "¥739",
          delPrice: "¥1099"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/onitsukatiger/2013/99907455/99907455_01_s.jpg?8",
          title:
            "Onitsuka Tiger鬼冢虎 2019新款MEXICO 66 VIN系列中性休闲鞋TH2J4L-0142（延续款）",
          price: "¥649",
          delPrice: "¥850"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/adidas/2018/100868538/100868538_01_s.jpg?6",
          title: "adidas阿迪达斯2019年新款男子CON18 TR PNT针织长裤BS0526",
          price: "¥209",
          delPrice: "¥299"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/adidasneo/2017/100580207/100580207_01_s.jpg?5",
          title: "adidas阿迪休闲2019年新款男子COURT系列中帮鞋B74494",
          price: "¥279",
          delPrice: "¥429"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/onitsukatiger/2018/100979258/100979258_01_s.jpg?8",
          title: "Onitsuka Tiger鬼冢虎 中性MEXICO 66 SLIP-ON休闲鞋D3K0Q-0023",
          price: "¥459",
          delPrice: "¥650"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/adidas/2018/100913409/100913409_01_s.jpg?7",
          title: "adidas阿迪达斯2019男子FreeLift CC圆领短T恤CW3927",
          price: "¥179",
          delPrice: "¥269"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/adidas/2018/100988771/100988771_01_s.jpg?7",
          title: "adidas阿迪达斯2019年新款男子SUPERNOVA TEE圆领短T恤CZ8725",
          price: "¥189",
          delPrice: "¥299"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/nike/2018/100980460/100980460_01_s.jpg?7",
          title:
            "Nike耐克2019年新款女子WMNS NIKE COURT ROYALE AC复刻鞋AO2810-102",
          price: "¥399",
          delPrice: "¥449"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/nike/2018/100980884/100980884_01_s.jpg?5",
          title: "Nike耐克2019年新款男子NIKE QUEST跑步鞋AA7403-001",
          price: "¥469",
          delPrice: "¥599"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/adidasneo/2018/100989710/100989710_01_s.jpg?4",
          title: "adidas neo阿迪休闲男子LITE RACER CLN跑步休闲鞋B96567",
          price: "¥309",
          delPrice: "¥569"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/vans/2017/101016458/101016458_01_s.jpg?5",
          title: "VANS万斯 2019新款男子Ward硫化鞋VN0A36EM7HI（延续款）",
          price: "¥465",
          delPrice: "¥465"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/adidasclassic/2018/100915257/100915257_01_s.jpg?15",
          title:
            "adidas Originals阿迪三叶草2019男子TREFOIL T-SHIRT圆领短T恤CW0709",
          price: "¥169",
          delPrice: "¥249"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/basto/2018/100999591/100999591_01_s.jpg?11",
          title:
            "BASTO/百思图2018秋季白/银软面牛皮革浅口小白鞋女休闲鞋YIP66CQ8",
          price: "¥199",
          delPrice: "¥799"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/vans/2018/101016455/101016455_01_s.jpg?6",
          title: "VANS万斯 男子Ward硫化鞋VN0A38DMU2I",
          price: "¥495",
          delPrice: "¥495"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/onitsukatiger/2017/100532820/100532820_01_s.jpg?6",
          title:
            "Onitsuka Tiger鬼冢虎 2019新款中性MEXICO 66运动休闲鞋DL408-0190（延续款）",
          price: "¥559",
          delPrice: "¥790"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/reebok/2018/101000937/101000937_01_s.jpg?3",
          title: "Reebok锐步男子LOGO GRAPHIC TEE圆领短袖T恤DN7540",
          price: "¥99",
          delPrice: "¥199"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/adidasneo/2018/100989705/100989705_01_s.jpg?6",
          title: "adidas neo阿迪休闲女子LITE RACER CLN跑步休闲鞋BB6896",
          price: "¥309",
          delPrice: "¥569"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/adidas/2018/100979956/100979956_01_s.jpg?5",
          title: "adidas阿迪达斯2019男子CLIMACOOL vent m跑步清风跑步鞋CG3914",
          price: "¥539",
          delPrice: "¥829"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/nike/2018/100916162/100916162_01_s.jpg?4",
          title: "NIKE耐克男子NIKE ODYSSEY REACT跑步鞋AO9819-001",
          price: "¥489",
          delPrice: "¥969"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/adidasneo/2018/100990040/100990040_01_s.jpg?3",
          title: "adidas neo阿迪休闲2019年女子W CE TEE圆领短T恤DM2064",
          price: "¥89",
          delPrice: "¥129"
        },
        {
          img:
            "http://i2.ygimg.cn/pics/adidasneo/2018/101010701/101010701_01_s.jpg?4",
          title: "adidas neo阿迪休闲男子BP DAILY双肩包CF6858",
          price: "¥199",
          delPrice: "¥199"
        }
      ]
    };
  }
};
</script>
<style scoped>
.NospCartHT {
  background: url(../../assets/point.png) left center repeat-x;
  text-align: center;
}
.NospCartHT span {
  background: #eee;
  display: inline-block;
  padding: 12px 10px;
  font-size: 14px;
  text-align: center;
  color: #666;
}
.NospCartHT img {
  vertical-align: middle;
  margin-right: 3px;
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
  color: #666;
}
.NospCartFT p {
  background: #eee;
  display: inline-block;
  padding: 18px 10px;
  font-size: 10px;
  text-align: center;
  color: #a0a0a0;
}
.price {
  color: red;
  font-weight: 700;
  font-size: 14px;
}
.NospCartFT {
  background: url(../../assets/point.png) left center repeat-x;
  margin: 0 50px;
  text-align: center;
}
.NospCartFT p {
  background: #eee;
  display: inline-block;
  padding: 18px 10px;
  font-size: 10px;
  text-align: center;
  color: #a0a0a0;
}
</style>
