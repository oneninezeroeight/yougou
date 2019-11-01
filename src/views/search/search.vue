<template>
  <div>
    <Searcher></Searcher>
    <Searchw></Searchw>
  </div>
</template>
<script>
import Searcher from "@/components/searcher/searcher.vue";
import Searchw from "@/components/searchw/searchw.vue";

export default {
  components: {
    Searcher,
    Searchw,
  }
};
</script>
<style lang="scss">
  body{
    background:#fff!important;
  }
</style>