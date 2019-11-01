<template>
<div>

    <div class="loginTypeWrap">
        <div :class="['loginType',{loginTypeHover:isPhoneLogin}]" logintype="phoneLogin" @click="changeLoginType"><span>手机号快捷登录<span></span></span></div>
        <div :class="['loginType',{loginTypeHover:!isPhoneLogin}]" logintype="normalLogin" @click="changeLoginType"><span>账号密码登录</span></div>
    </div>
    <section autocomplete="off" class="loginarea loginareaN">
            <div class="loginareaType" v-if="isPhoneLogin" style="">
                <div class="pic_warp jusernamePhone">
                    <div class="label">
                        <input v-model="phone"
                        @click="inputClick" @blur="inputFocus" @input="checkPhone(phoneReg)" 
                        type="tel" 
                        class="inptxt usernamePhone" name="userName"
                        placeholder="手机号" id="usernamePhone" maxlength="11">
                    </div>
                    <em class="cleanInput cleanInputR90" style="display: none;" @click="clearText"></em>
                    <a @click="getVerifyCode"
                    class="btn_org getIphoneCode getPhoneCodeYes" id="getPhoneCode" href="javascript:;" v-html="verifyHTML">获取验证码</a>
                    <p class="formtip" id="codeTips" v-text="phoneInfo"></p>
                </div>
                <div class="pic_warp">
                    <div class="label">
                        <input v-model="vertificationCode" 
                        @click="inputClick"  @blur="inputFocus" 
                        @input="checkVertificationCode" 
                        type="number" class="inptxt" name="userPhoneCode" value="" required="" placeholder="请输入验证码" id="userPhoneCode">
                    </div>
                    <em @click="clearText" 
                    class="cleanInput cleanInputRR" style="display: none;"></em>
                    <p class="formtip"></p>
                </div>
            </div>
            <form name="userLogin" v-else id="my-form">
                <div class="loginareaType">
                    <p class="formtip"></p>
                    <div class="pic_warp">
                        <div class="label">
                            <input v-model="username" 
                            @click="inputClick"  @blur="inputFocus" 
                            @input="check('username',phoneReg, '输入的账户无效')"
                            type="text" class="inptxt jusername" name="userName" value="" placeholder="手机号/邮箱" id="username" maxlength="50" autocomplete="off">
                        </div>
                        <em @click="clearText" class="cleanInput cleanInputR"></em>
                        <p class="formtip" v-text="usernameInfo"></p>
                    </div>
                    <div class="pic_warp userPassword">
                        <div class="label">
                            <input v-model="password" 
                            @click="inputClick"  @blur="inputFocus" 
                             @input="check('password',passwordReg, '请输入6-25位密码')" 
                            type="password" class="inptxt" name="password" autocomplete="off" value="" required="" placeholder="密码" id="password" maxlength="50" >
                        </div>
                        <em @click="clearText" class="cleanInput cleanInputRR"></em>
                        <div class="passwordEyes"></div>
                        <p class="formtip" v-text="passwordInfo"></p>
                    </div>
                </div>
                
            </form>
            <div class="button_area " @click="login">
                    <input v-if="!canLogin" 
                    type="button" class="btn_org SubmitBtnNo" value="登录" >
                    <input v-else 
                    type="button" id="SubmitBtn" class="btn_org SubmitBtnYes" value="登录">
                </div>
        <div class="phoneLoginTip phoneLoginShow" v-if="isPhoneLogin">新会员限时惊喜 首次登录送百元礼包</div>
        <div class="userLocal" v-else><span class="userLocalH"><a href="javascript:;">忘记密码</a></span></div>
    </section>
</div>
</template>
<script>
import axios from 'axios';
import store from 'store';
    export default {
        data(){
            return {
                isPhoneLogin: true,
                phone:'',
                vertificationCode: '',
                username: '',
                password: '',
                phoneInfo: '',
                usernameInfo: '',
                passwordInfo:'',
                isPhoneChecked: false,
                isVerifyCodeChecked:false,
                phoneReg: /^1[3-9]\d{9}$/,
                passwordReg: /\S{6,25}/,
                verifyHTML: '获取验证码',
                canGetVertificationCode: false,
                isLoginSuccess:false
            }
        },
        computed: {
            isUsernameChecked() {
                return this.check('username',this.phoneReg, '输入的账户无效')
            },
            isPasswordChecked() {
                return this.check('password',this.passwordReg, '请输入6-25位密码')
            },
            canLogin() {
                if(this.isPhoneLogin) {
                    return this.isPhoneChecked && this.isVerifyCodeChecked
                }else {
                    return this.isUsernameChecked && this.isPasswordChecked;
                }
            }
        },
        created(){
            this.phoneInfo = '';
        },
        methods: {
            changeLoginType(){
                this.isPhoneLogin = !this.isPhoneLogin;
            },
            inputClick(e) {
               e.target.parentNode.nextSibling.style.display = "block"
            },
            inputFocus(e) {
                e.target.parentNode.nextSibling.style.display = "none";
            },
            clearText(e){
                // e.target.previousSibling.firstChild.value = '';
            },
            checkPhone(reg) {
                
                if(this.phone.length == 0) {
                    this['phoneInfo'] ='手机号不能为空';
                    this.canGetVertificationCode = false;
                    
                }else if(!reg.test(this.phone)) {
                     this['phoneInfo'] = '手机号格式错误';
                     this.canGetVertificationCode = false;
                }else {
                    this['phoneInfo'] = '';
                    this.canGetVertificationCode = true;
                }
                this.isPhoneChecked = this.canGetVertificationCode;
                return reg.test(this[name])
            },
            getVerifyCode(){
                if(this.canGetVertificationCode) {
                    let s = 60;
                    let timer = setInterval(()=>{
                        this.verifyHTML = --s + 's';
                        if(s==0) {
                            clearInterval(timer);
                            this.verifyHTML = '重新获取';
                        }
                    },1000)
                }
            },
            checkVertificationCode() {
                if(this.vertificationCode == '5467') {
                    this.isVerifyCodeChecked = true;
                }
            },
            check(name,reg,info) {
                let flag = false
                if(this[name].trim().length == 0) {
                    flag = false;
                }else if (!reg.test(this[name])) {
                    this[name + 'Info'] = info
                    flag = false;
                }else {
                    this[name + 'Info'] = '';
                    flag = true;
                }
                return flag;
            },
            login() {
                if(!this.canLogin) {
                    return false;
                }else {
                    if(this.isPhoneLogin) {
                        //一定登录成功，拿到返回的token就完事
                        axios({
                            method: 'post',
                            url: 'http://10.3.142.130:8088/api/loginGet',
                            data: {
                                phone:this.phone
                            }
                        }).then((result)=> {
                            let token = result.data.token;
                            store.set('user_session',token);
                            this.$router.push({path: '/'});
                            
                        })
                    }else {
                        //检查密码对不对,对=>返回token
                        axios({
                            method: 'post',
                            url: 'http://10.3.142.130:8088/api/loginFind',
                            data: {
                                phone:this.username,
                                password: this.password
                            }
                        }).then((result)=> {
                            if(result.data.status=="fail") {
                                this.passwordInfo = '登陆失败，用户名或密码错误'
                            }else if(result.data.status == "success") {
                                let token = result.data.token;
                                store.set('user_session',token);
                                this.$router.push({path: '/'});
                            }
                        })
                    }
                }
            }
        }
    };
</script>