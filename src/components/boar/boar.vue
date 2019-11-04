<template>
  <div class="sen">
    <div class="sen-module">
      <ul class="ygSection">
        <li v-for="(item, index) in tagger" :key="index">
          <router-link :to="{ name: 'integrate' }">
            <img class="linkRre" :src="item.imgUrl" />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tagger: [
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/01/1547706860219.png"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/01/1547706864808.png"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/01/1547706869505.png"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/01/1547706876310.png"
        }
      ]
    };
  }
};
</script>
<style scoped>
.sen {
  margin-top: -0.2rem;
}
.sen-module {
  height: 3.8rem;
  width: 100%;
}
.ygSection {
  display: flex;
  flex: none;
}
.linkRre {
  height: 3.8rem;
  width: 5.866rem;
}
</style>
