<template>
    <div>
        <section class="noresult shopcart_empty">
			<img src="http://m.yougou.com/images/car.png" width="60" alt="">
			<p>购物车是空的</p>
		<div class="button_area">2016.9.21取消
			<a @click="gobtn" class="btn_org">去逛逛</a>
		</div>			
	</section>
    </div>
</template>
<script>
export default {
    methods:{
        gobtn(){
            this.$router.push({path:'/'})
        }
    }
}
</script>
<style lang="scss" scoped>
    .noresult {
    text-align: center;
    line-height: 2.2em;
    padding: 50px 20px;
}
</style>