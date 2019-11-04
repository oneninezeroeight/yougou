<template>
  <div id="type">
    <Search />
    <MainNav />
    <Types />
  </div>
</template>
<script>
import Search from "../../components/search/search";
import MainNav from "../../components/mainnav/mainnav-2";
import Types from "../../components/type/type";
import store from "store";
export default {
  name: "type",
  components: {
    Search,
    MainNav,
    Types
  }
};
</script>
