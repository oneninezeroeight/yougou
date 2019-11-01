<template>
  <div id="box">
    <Tou></Tou>
    <Content/>
  </div>
</template>

<script>
import Tou from "@/components/jife/tou.vue";
import Content from "@/components/jife/content.vue";

export default {
  components: {
    Tou,
    Content
  }
};
</script>