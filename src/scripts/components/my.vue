<template>
  <div>
    <div class="my-container">
      <div class="my-header">
         <img src="/images/sec01.png"/>
         <div>
            <b>登陆/</b>
            <b>注册</b>
         </div>
      </div>
      <div class="my-section">
         <ul>
            <li>
              <em>我的兼职</em>
              <span>></span>
            </li>
            <li>
              <em>我的简历</em>
              <span>></span>
            </li>
            <li>
              <em>我的收藏</em>
              <span>></span>
            </li>
            <li>
              <em>章鱼俱乐部</em>
              <b>加入会员享积分奖励<span>></span></b>
            </li>
            <li>
              <em>推荐给朋友</em>
              <i>成功推荐积分奖励<span>></span></i>
            </li>
            <li>
              <em>联系客服</em>
              <b>4007-3333-00<span>></span></b>
            </li>
         </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import { tabChanger } from '../vuex/actions';
  module.exports = {
    vuex:{
      actions: {
        change:tabChanger
      }
    },
    ready:function(){
      this.change(3);
    }
  }

</script>
