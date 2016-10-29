<template>
  <div>
    <div class="news-container">
      <header>
          <h3>消息</h3>
      </header>
      <section id="news-scroll">
        <ul>
          <li v-for="item in news">
            <img v-bind:src="item.url" />
            <div class="secright">
                <b>{{item.name}}</b>
                <span>{{item.text}}</span>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
  import { tabChanger } from '../vuex/actions';
  import commonUtil from '../utils/common.util.js';
  export default {
    data:function(){
      return {
        news:[]
      }
    },
    vuex: {
      actions: {
        change: tabChanger
      }
    },
    ready() {
      this.change(2);
      this.$http.get('/rest/news')
      .then((res)=>{
        this.news = res.data.data;
        Vue.nextTick(function(){
          commonUtil.isAllLoaded('#news-scroll',function(){
              var myScroll = new IScroll('#news-scroll', {
                probeType: 3,
                mouseWheel:true,
                click:true
              })
          })
        })
      })
    }
  }
</script>
