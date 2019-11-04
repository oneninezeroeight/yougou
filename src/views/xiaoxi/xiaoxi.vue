<template>
  <div id="box">
    <Toubu>消息盒子</Toubu>
    <SectionFo />
  </div>
</template>

<script>
import Toubu from "@/components/find/toubu/toubu.vue";
import SectionFo from "@/components/find/sectionFo/sectionFo.vue";

export default {
  components: {
    Toubu,
    SectionFo
  }
};
</script>
