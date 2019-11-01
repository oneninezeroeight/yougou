<template>
  <div>
        <div class="SearchHot">
            <p class="SearchHotP">热门搜索</p>
        </div>
        <div class="SearchHotUl">
            <ul class="SearchHis">
                <li v-for="(item,index) in tagger" :key="index">
                    <a @click="toDetailPage(item.url)" onclick="return false;" href="" v-text="item.name"></a>
                </li>
            </ul>
        </div>
  </div>

</template>
<script>
import observer from "../../tool/observer"
export default {
  data() {
    return {
      // floor: false,
      searchText:"",
      tagger: [
        { name: "新款单鞋",url:"e1c9eaf74b7f46d884d60fc4659b8be9/1"},
        { name: "老爹鞋",url:"251325c524a04a64ab1aea4d4e720020/1"},
        { name: "小白鞋",url:"3a01eddcb6e34f70b2e68446fa3a0a08/1"},
        { name: "休闲鞋",url:"a640511a521d4d5cbe4f00fdc6ed7e84/1"},
        { name: "跑步鞋",url:"08b1bf6dc1434c34a1355244b922e7c1/1"},
        { name: "百丽",url:"d0ee8c391d6c42a8a9e2febd70b49088/1"},
        { name: "思加图",url:"7bb0218641de4b5c8fe496ff1ab7dc5d/1" },
        { name: "阿迪", url:"acbe9cb2bea542be96b525af50bcb6b3/1"},
        { name: "天美意",url:"688850fd81de46169074a1460ee6751d/1"},
        { name: "卫衣",url:"20ca7ff2a75f487b93e8cab2a8487d10/1"}
      ]
    };
  },
  // methods: {
  //   History() {
  //     this.floor = !this.floor;
  //   }
  // },
  mouned(){
    observer.on("setSeatchText",(searchText) => {
      this.searchText = searchText
    })
  },
  methods:{
    toDetailPage(id) {
                this.$router.push({path:'/brand/'+id});
            },
  }
};
</script>
<style lang="scss" scoped>
.SearchHot {
  height: 3rem;
  width: 100%;
  line-height: 3rem;
  background: url(../../assets/hot.png) center left no-repeat;
  background-size: 1rem auto;
  background-position: 0.8rem;
}
.SearchHotP {
  margin-left: 2.3rem;
}
.SearchHotUl {
  height: 8rem;
  width: 100%;
}
.SearchHis {
  list-style: none;
}
.SearchHis li {
  float: left;
  margin: 0.4rem;
}
.SearchHis li a {
  display: inline-block;
  height: 2rem;
  width: 5rem;
  background: #eeeeee;
  color: #666;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  line-height: 2rem;
  text-align: center;
}
.searchHistory {
  height: 100%;
  width: 100%;
  background: #fff;
  margin-top: 1rem;
}
.searchHistoryUl li a {
  list-style: none;
  color: #666;
}
</style>