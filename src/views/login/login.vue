<template>
    <div class="screen_wrap">
        <LoginHeader />
        <LoginType />
        <loginOther />
        <loginFoot />
    </div>
</template>
<script>
import LoginHeader from '../../components/login/loginHeader'
import LoginType from '../../components/login/loginType'
import loginOther from '../../components/login/loginOther'
import loginFoot from '../../components/login/loginFoot'

    export default {
        // name,
        
        components: {
            LoginHeader,LoginType,loginOther,loginFoot
        }
    };
</script>