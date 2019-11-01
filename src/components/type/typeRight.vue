<template>
  <section id="brandShopRight" class="brandShopRight brandShopRightN" style="top: 0px;left:90px">
    <div class="brandShopRightCon brandShow brandClassify">
      <div v-for="(type,index) in types" :key="index">
        <div class="classifyTitle refcheck">
          <a href="javascript:;" class="reflinks">
            <p>{{type.name}}</p>
          </a>
        </div>

        <div class="ulW refcheck">
          <ul class="brandShopListUl brandShopListUlRe clearfix">
            <li v-for="brand in type.thrCls" :key="brand.categoryId" style="width: 25.33333%;">
              <a
                class="linkRe reflinks ellipsis"
                @click="toBrandPage(brand.categoryId)"
                :categoryId="brand.categoryId"
              >
                <img :src="brand.pic" />
                {{brand.name}}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['types'],
  methods: {
    toBrandPage(id) {
      this.$router.push({
        path: "/brand/"+id+'/'+1
      });
    }
  }
};
</script>
<style lang="scss" scoped>
  
</style>