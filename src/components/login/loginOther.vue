<template>
  <aside class="loginother loginotherN">
    <div class="hd"><span>第三方平台登录</span></div>
    <div class="share">
      <a
        href="/api/qq/toLogin.sc?redirectURL=http%3A%2F%2Fm.yougou.com%2Fmy%2FmyIndex.sc"
        ><img width="38" alt="" src="http://m.yougou.com/images/login/QQ.png"
      /></a>
      <a
        href="/api/alipayWap/sendToFastLogin.sc?redirectURL=http%3A%2F%2Fm.yougou.com%2Fmy%2FmyIndex.sc"
        ><img width="38" alt="" src="http://m.yougou.com/images/login/pay.png"
      /></a>
      <a
        href="/api/sina/toLogin.sc?redirectURL=http%3A%2F%2Fm.yougou.com%2Fmy%2FmyIndex.sc"
        ><img width="38" alt="" src="http://m.yougou.com/images/login/sina.png"
      /></a>
      <div style="position: relative; padding-top: 20px;">
        <span style="color:#747474;">首次登录表示您同意</span>
        <span style="text-decoration:underline;color:#FF4563;"
          >优购会员注册协议</span
        >
      </div>
    </div>
  </aside>
</template>
<script>
export default {};
</script>
