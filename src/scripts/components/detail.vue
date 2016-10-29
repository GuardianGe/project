<template>
    <div>
      <div class="detail-container">
        <header>
            <span v-link="{path: '/index'}"><</span>
            <h3>斗米兼职</h3>
        </header>
        <div class="detail-box" id="detail-box">
          <div class="detail-wrap">
            <nav>
              <img src="/images/detail.jpg">
            </nav>
              <section>
                <ul class="content-center">
                    <li>
                        <div class="content-left">
                            <img :src="detailInfo.url" />
                            <span>报名中</span>
                        </div>

                        <div class="content-right">
                            <div>
                                <span>{{detailInfo.name}}</span>
                                <i>奖</i>
                            </div>
                            <div>
                                <span>
                                    <i class="iconfont"></i>
                                    <b>{{detailInfo.address}}</b>
                                </span>
                                <i>{{detailInfo.price}}/天</i>
                            </div>
                             <div>
                                <span>
                                    <i class="iconfont"></i>
                                    斗米担保
                                </span>
                                <i>{{detailInfo.date}}</i>
                            </div>
                        </div>
                    </li>
                </ul>
              </section>
              <div class="gift">
                  <span class="iconfont">&#xe606;&ensp;点击领取兼职大礼包~</span>
              </div>
              <div class="info">
                  <span>古星电子</span>
                  <div>
                      <b>类型：</b><em>话务客服</em>
                  </div>
                  <div>
                      <b>人数：</b><em>100人，男女不限</em>
                  </div>
                  <div>
                      <b>日期：</b><em>10.25~01:00 每周休一天</em>
                   </div>
                   <div>
                       <b>薪资：</b><em>每月结算</em>
                   </div>
                   <div class="safe">
                       <strong>斗米担保</strong>
                       <i>斗米担保职位工资按时结算，适用斗米用户权益保障担保赔付条款</i>
                    </div>
              </div>
              <div class="place">
                  <div class="ptop">
                     <b>工作地点</b>
                     <span>更多(2)>></span>
                  </div>
                  <div class="pbottom">
                      <b>地址：</b><i>{{detailInfo.place}}</i>
                  </div>
              </div>
              <div class="info-detail">
                <div class="info-detail-top">
                  <span>职位描述：</br><b v-html="detailInfo.info"></b></span>
                  <span></br>面试地点：</br><b v-html="detailInfo.place"></b></span>
                </div>
              </div>
              <div class="work-more">
                  <div class="work-more-top">
                    <span>推荐职位</span>
                    <b>更多>></b>
                  </div>
                  <ul class="content-center">
                      <li v-for="m in more">
                          <div class="content-left">
                              <img :src="m.url" />
                              <span>报名中</span>
                          </div>

                          <div class="content-right">
                              <div>
                                  <span>{{m.name}}</span>
                              </div>
                              <div>
                                  <span>
                                      <i class="iconfont"></i>
                                      <b>{{m.address}}</b>
                                  </span>
                                  <i>{{m.price}}/天</i>
                              </div>
                               <div>
                                  <span>
                                      <i class="iconfont"></i>
                                      斗米担保
                                  </span>
                                  <i>{{m.date}}</i>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import commonUtil from '../utils/common.util.js';
var myScroll = null;
export default {
  data() {
    return {
      title: '',
      detailInfo: {},
      more:[]
    }
  },
  ready() {
    var that = this;
    this.$http.get('/rest/list')
    .then((res)=>{
        this.more = res.data.data;
         console.log(this.more);
    });
    // console.log(this.$route.params.id);
    this.$http.get('/rest/detail')
      .then((res) => {
        console.log(res);
        res.data.data.forEach(({id,url,name,address,price,date,info,place}) => {
        if(id == this.$route.params.id) {
          that.detailInfo = {id:id,url:url, name:name, address:address,price:price,date:date,info:info,place:place};
          Vue.nextTick(function(){
            commonUtil.isAllLoaded('#detail-box', function() {
                myScroll = new IScroll('#detail-box', {
                    probeType: 3,
                    mouseWheel: true,
                    click: true
                })
              });
          });
          return;
          }
      })
    });
  }
}
</script>
