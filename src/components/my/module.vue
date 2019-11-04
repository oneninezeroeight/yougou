<template>
  <div>
    <div class="module">
      <div class="hd clearfix">
        <div class="moduleManage">
          <div
            class="touX"
            onclick="javascript:window.location.href='/my/manage.sc';"
          ></div>
          <p
            class="newN"
            onclick="javascript:window.location.href='/my/manage.sc';"
          >
            {{ dianhua }}
          </p>
          <span
            ><b
              class="ptuser"
              onclick="javascript:window.location.href='/my/ucenter.jhtml';"
              >{{ title }}</b
            >
            <em onclick="javascript:window.location.href='/my/manage.sc';"
              ><a href="/my/manage.sc" class="hasUnder"> {{ name }}&gt;</a></em
            >
          </span>
        </div>
        <a class="moduleManageInfo"></a>
      </div>
    </div>
  </div>
</template>
<script>
import request from "../../common/axios";
import store from "store";
export default {
  data() {
    return {
      title: "普通会员",
      name: "账户管理",
      dianhua: ""
    };
  },
  mounted() {
    request({
      url: "/api/getUser",
      params: {
        token: store.get("user_session")
      }
    }).then(result => {
      console.log(result);
      this.dianhua = result.data.phone;
    });
  }
};
</script>
