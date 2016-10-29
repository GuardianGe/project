<template>
  <div>
    <div class="teg-container">
      <header>
          <h3>斗米特工</h3>
      </header>
    <nav>
      <ul id="teg-swiper-nav">
        <li v-for="nav in tegNav" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index ? 'active': ''">{{nav}}</li>
      </ul>
    </nav>
    <section>
      <div class="swiper-container" id="teg-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <section id="teg-scroll">
              <div>
                <div class="head">
                    <img v-bind:src="imgArrow"/>
                    <span>下拉刷新...</span>
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
                <div class="foot">
                  <img v-bind:src="imgArrow"/>
                  <span>上拉加载更多...</span>
                </div>
              </div>
            </section>
          </div>
          <div class="swiper-slide">
            <section id="teg-scroll2" v-if="!isLoading">
              <div>
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
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
  </div>
</template>
<script>
    import { tabChanger } from '../vuex/actions';
    import commonUtil from '../utils/common.util.js';

    let mySwiper = null;

    export default {
        vuex: {
            actions: {
                change: tabChanger
            }
        },
        data: function() {
            return {
                list: [],
                beautylist: [],
                imgArrow: './images/arrow.png',
                curIndex: 0,
                tegNav: ['全部特工', '新手入门']
            }
        },
        ready() {
            this.change(1);
            let that = this;
            // 足球现场：
            this.$http.get('/rest/list')
                .then((res) => {
                    this.list = res.data.data;
                    this.isLoading = false;
                    // DOM 更新后，图片加载完 实例化 IScroll
                    Vue.nextTick(function() {
                        commonUtil.isAllLoaded('#teg-scroll', function() {
                            var myScroll = new IScroll('#teg-scroll', {
                                probeType: 3,
                                mouseWheel: true,
                                click: true
                            });
                            var myScroll2 = new IScroll('#teg-scroll2', {
                                probeType: 3,
                                mouseWheel: true,
                                click: true
                            });

                            myScroll.scrollTo(0, -35);

                            var head = $('.head img'),
                                topImgHasClass = head.hasClass('up');
                            var foot = $('.foot img'),
                                bottomImgHasClass = head.hasClass('down');

                            myScroll.on('scroll', function() {
                                var y = this.y,
                                    maxY = this.maxScrollY - y;
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
                                if (this.y >= -35 && this.y < 0) {
                                    myScroll.scrollTo(0, -35);
                                    head.removeClass('up');
                                } else if (this.y >= 0) {
                                    head.attr('src', './images/ajax-loader.gif');

                                    // ajax下拉刷新数据
                                    that.$http.get('/rest/listrefresh')
                                        .then((res) => {
                                            that.list = res.data.data.concat(that.list);
                                            myScroll.scrollTo(0, -35);
                                            head.removeClass('up');
                                            head.attr('src', './images/arrow.png');
                                            Vue.nextTick(function() {
                                                myScroll.refresh();
                                            });
                                        })
                                }

                                var self = this;
                                var maxY = this.maxScrollY - this.y;
                                if (maxY > -35 && maxY < 0) {
                                    myScroll.scrollTo(0, self.maxScrollY + 35);
                                    foot.removeClass('down')
                                } else if (maxY >= 0) {
                                    foot.attr('src', './images/ajax-loader.gif');
                                    //ajax上拉加载数据
                                    that.$http.get('/rest/listmore')
                                        .then((res) => {
                                            that.list = that.list.concat(res.data.data);
                                            foot.removeClass('down');
                                            foot.attr('src', './images/arrow.png');
                                            Vue.nextTick(function() {
                                                myScroll.refresh();
                                                myScroll.scrollTo(0, self.maxScrollY + 35);
                                            });
                                        });
                                }
                            });
                        });
                    });
                });

            mySwiper = new Swiper("#teg-swiper", {
                onSlideChangeStart: function() {
                    that.curIndex = mySwiper.activeIndex;
                }
            });
        },

        methods: {
            switchSwiper(index) {
                this.curIndex = index;
                mySwiper.slideTo(index);
            }
        }
    }
</script>
