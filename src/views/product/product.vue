<template>
    <div>
        <ProductHeader />
        <MainNav />
        <ProductBanner />
        <ProductButtons />
    </div>
</template>
<script>
import Header from '../../components/product/productHeader';
import MainNav from '../../components/mainnav/mainnav-2';
import ProductBanner from '../../components/product/productBanner';
import ProductButtons from '../../components/product/productButtons';
    export default {
        components:{
           ProductHeader: Header, MainNav,ProductBanner,ProductButtons
        }
    };
</script>