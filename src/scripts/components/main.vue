<template>
  <div class="main-container">
      <header>
          <ul>
              <li>
                  <b class="iconfont">&#xe605;</b>
                  <span>北京</span>
              </li>
              <li>斗米兼职</li>
              <li class="iconfont">&#xe66f;</li>
          </ul>
      </header>
      <div v-loading="isLoading" id="loading"></div>
      <section id="main-scroll" v-if="!isLoading">
          <div>
              <div class="head">
                    <img v-bind:src="imgArrow"/>
                    <span>下拉刷新...</span>
              </div>
              <div class="swiper-container" id="main-swiper">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide" v-for="nav in navlist"><img v-bind:src="nav.url" /></li>
                    </ul>
                    <div class="swiper-pagination"></div>
              </div>
              <ul class="main-nav">
                  <li>
                      <div>
                          <i class="iconfont">&#xe61f;</i>
                      </div>
                      <span>全部兼职</span>
                  </li>
                  <li>
                      <div>
                          <i class="iconfont">&#xe602;</i>
                      </div>
                      <span>企业担保</span>
                  </li>
                  <li>
                      <div>
                          <i class="iconfont">&#xe619;</i>
                      </div>
                      <span>在线兼职</span>
                  </li>
                  <li>
                      <div>
                          <i class="iconfont">&#xe633;</i>
                      </div>
                      <span>签到赚钱</span>
                  </li>
              </ul>
              <div class="main-content">
                  <div class="main-content-head">
                      <div>
                          <i class="iconfont">&#xe616;</i>
                          <b>猜你喜欢</b>
                      </div>
                      <span>更多>></span>
                  </div>
                  <ul class="content-center">
                      <li v-for="l in list" v-link="{name: 'detail', params: {id: l.id}}">
                          <div class="content-left">
                              <img :src="l.url" />
                              <span>报名中</span>
                          </div>

                          <div class="content-right">
                              <div>
                                  <span>{{l.name}}</span>
                                  <i>奖</i>
                              </div>
                              <div>
                                  <span>
                                      <i class="iconfont"></i>
                                      <b>{{l.address}}</b>
                                  </span>
                                  <i>{{l.price}}/天</i>
                              </div>
                               <div>
                                  <span>
                                      <i class="iconfont"></i>
                                      斗米担保
                                  </span>
                                  <i>{{l.date}}</i>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
              <div class="foot">
                  <img v-bind:src="imgArrow"/>
                  <span>上拉加载更多...</span>
               </div>
          </div>
      </section>
  </div>
</template>

<script>
  import { tabChanger } from '../vuex/actions';
  import commonUtil from '../utils/common.util.js';
  import loading from '../libs/vue-loading';
  var mySwiper = null;    //初始化一个全局mySwiper变量，方便实现页面的跳转

  export default {
        data() {
          return {
            navlist:[],
            list: [],
            curIndex: 0,
            imgArrow: './images/arrow.png',
            isLoading: true
          }
        },
        directives: {
            loading
        },

        vuex: {
            actions: {
                change: tabChanger
            }
        },
      ready: function() {
          var that = this;
          this.change(0);
          this.$http.get('/rest/navlist')
          .then((res)=>{
              this.navlist = res.data.data;
               console.log(this.navlist);
               this.isLoading = false;
               Vue.nextTick(function() {
                    mySwiper = new Swiper("#main-swiper",{
                   loop:true,
                   pagination: '.swiper-pagination',
                   direction:'horizontal',
                   autoplay:'1500'
               });
            });
          });

          this.$http.get('/rest/list')
                  .then((res) => {
              this.list = res.data.data;
              console.log(this.list);
          // DOM 更新后，图片加载完 实例化 IScroll
                Vue.nextTick(function() {
                        commonUtil.isAllLoaded('#main-scroll', function() {
                            var myScroll = new IScroll('#main-scroll', {
                                probeType: 3,
                                mouseWheel: true,
                                click: true
                            });
                        myScroll.scrollTo(0, -45);

                        var head = $('.head img'),
                            topImgHasClass = head.hasClass('up');
                        var foot = $('.foot img'),
                            bottomImgHasClass = head.hasClass('down');

                        myScroll.on('scroll', function() {     //滑动时触发事件
                            var y = this.y,                     //滑动距离
                                maxY = this.maxScrollY - y;      //距离底部距离
                            if (y >= 0) {
                                !topImgHasClass && head.addClass('up');
                                return '';
                            }
                            if (maxY >= 0) {
                                !bottomImgHasClass && foot.addClass('down');
                                return '';
                            }
                        });

                        myScroll.on('scrollEnd', function() {
                            if (this.y >= -45 && this.y < 0) {
                                myScroll.scrollTo(0, -45);
                                head.removeClass('up');
                            } else if (this.y >= 0) {
                                head.attr('src', './images/ajax-loader.gif');

                               // ajax下拉刷新数据
                                that.$http.get('/rest/listrefresh')
                                    .then((res) => {
                                        that.list = res.data.data.concat(that.list);
                                        myScroll.scrollTo(0, -45);
                                        head.removeClass('up');
                                        head.attr('src', './images/arrow.png');
                                        Vue.nextTick(function() {
                                        myScroll.refresh();
                                        });
                                    })
                            }

                            var self = this;
                            var maxY = this.maxScrollY - this.y;
                            if (maxY > -45 && maxY < 0) {
                                myScroll.scrollTo(0, self.maxScrollY + 45);
                                foot.removeClass('down')
                            } else if (maxY >= 0) {
                                foot.attr('src', './images/ajax-loader.gif');
                               // ajax上拉加载数据
                                that.$http.get('/rest/listmore')
                                    .then((res) => {
                                        that.list = that.list.concat(res.data.data);
                                        foot.removeClass('down');
                                        foot.attr('src', './images/arrow.png');
                                        Vue.nextTick(function() {
                                        myScroll.refresh();
                                        myScroll.scrollTo(0, self.maxScrollY + 45);
                                        });
                                    });
                                }
                            });
                        });
                    });
                });
    }
  }
</script>
