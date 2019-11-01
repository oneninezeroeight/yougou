<template>
    <div>
        <footer id="footerW">
            <div class="loginbar">
                <span>
                    <a class="userNameW" href="/my/myIndex.sc" target="_top">{{title}}</a>
                    <em>|</em>
                    <a href="/my/logout.sc">{{name}}</a>
                </span>
                <p>
                    <a onclick="switchPCIndex()" href="javascript:;">电脑版</a>
                    <a onclick="switchAppDownload()" href="/agent">客户端</a>
                        <a href="/wx">微信</a>
                </p>
            </div>
            <section class="version">
                <p class="footerInfor footerInforName">百丽国际旗下购物网站</p>
                <p class="footerInfor">Copyright © 2011-2018 优购 m.yougou.com</p>
            </section>
        </footer>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title:"15111120308",
            name:"退出"
        }
    }
}
</script>
<style scoped>
    .loginbar span a.userNameW{
        font-size: 0.5rem;
        padding-top:0.7rem;
    }
    .loginbar a{
        font-size: 0.5rem;
    }
    .em{
        font-size: 0.5rem;
        margin-right:0.2rem;
    }
</style>