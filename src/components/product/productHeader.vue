<template>
    <header id="headerW">
        <div class="lftarea">
            <a href="javascript:history.go(-1);"><img src="../../img/new-back.png" width="15" alt="" @click="toPrePage"></a>
        </div>
        <h1 class="title" id="tit">商品详情</h1>
        <div class="sitebar" @click="mainNavShow_2">
            <a href="#" id="mainnav"><img src="../../img/ico-menu.png" width="20" alt="menu" ></a>
        </div>
    </header>

</template>
<script>
    export default {
        name: 'ProductHeader',
        methods: {
            toPrePage() {
                console.log(this.$router);
                
                this.$router.go(-1);
			},
			mainNavShow_2() {
				this.$store.commit('mainNavShow_2');
			}
        
        }
    };
</script>